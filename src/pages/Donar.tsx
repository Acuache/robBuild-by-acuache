import { useState, useEffect } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { Footer } from '../components'
export default function Donar() {
  // Estado para la tasa de cambio (desde API)
  const [exchangeRate, setExchangeRate] = useState(0) // PEN por USD
  const [rateLoading, setRateLoading] = useState(true)

  // Estado para la moneda seleccionada
  const [selectedCurrency, setSelectedCurrency] = useState<'PEN' | 'USD' | 'EUR'>('PEN')

  // Tasas de cambio dinámicas desde API
  // exchangeRate: PEN por USD (1 USD = X PEN)
  // eurPerUsd: EUR por USD (1 USD = X EUR)
  const [eurPerUsd, setEurPerUsd] = useState(0)

  // Función para obtener tasa de cambio
  const fetchExchangeRate = async () => {
    setRateLoading(true)
    try {
      // API gratuita de tipos de cambio
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
      const data = await response.json()

      if (data.rates) {
        if (data.rates.PEN) {
          setExchangeRate(data.rates.PEN) // PEN por USD
        }
        if (data.rates.EUR) {
          setEurPerUsd(data.rates.EUR) // EUR por USD
        }
      }
    } catch (error) {
      console.error('Error obteniendo tasa de cambio:', error)
      // Mantener tasa por defecto en caso de error
    } finally {
      setRateLoading(false)
    }
  }

  // Obtener tasa de cambio al cargar
  useEffect(() => {
    fetchExchangeRate()
  }, [])

  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Función para obtener montos preestablecidos según la moneda
  const getPresetAmounts = (currency: 'PEN' | 'USD' | 'EUR' = selectedCurrency) => {
    switch (currency) {
      case 'PEN':
        return [
          { value: 20, label: "S/ 20 soles" },
          { value: 50, label: "S/ 50 soles" },
          { value: 100, label: "S/ 100 soles" },
          { value: 200, label: "S/ 200 soles" },
        ]
      case 'USD':
        return [
          { value: 5, label: "$5 USD" },
          { value: 10, label: "$10 USD" },
          { value: 20, label: "$20 USD" },
          { value: 50, label: "$50 USD" },
        ]
      case 'EUR':
        return [
          { value: 5, label: "€5 EUR" },
          { value: 10, label: "€10 EUR" },
          { value: 20, label: "€20 EUR" },
          { value: 50, label: "€50 EUR" },
        ]
      default:
        return [
          { value: 20, label: "S/ 20 soles" },
          { value: 50, label: "S/ 50 soles" },
          { value: 100, label: "S/ 100 soles" },
          { value: 200, label: "S/ 200 soles" },
        ]
    }
  }

  // Función para obtener el símbolo de la moneda
  const getCurrencySymbol = () => {
    switch (selectedCurrency) {
      case 'PEN': return 'S/'
      case 'USD': return '$'
      case 'EUR': return '€'
      default: return 'S/'
    }
  }

  // Función para obtener el nombre de la moneda
  const getCurrencyName = () => {
    switch (selectedCurrency) {
      case 'PEN': return 'soles'
      case 'USD': return 'USD'
      case 'EUR': return 'EUR'
      default: return 'soles'
    }
  }

  // Función para convertir monto a USD para PayPal usando tasas del API
  // exchangeRate: PEN por USD (1 USD = X PEN)
  // eurPerUsd: EUR por USD (1 USD = X EUR)
  const convertToUSD = (amount: number) => {
    if (selectedCurrency === 'USD') return amount.toFixed(2)
    if (selectedCurrency === 'PEN') {
      if (!exchangeRate || exchangeRate <= 0) throw new Error('Tasa PEN/USD no disponible')
      return (amount / exchangeRate).toFixed(2)
    }
    if (selectedCurrency === 'EUR') {
      if (!eurPerUsd || eurPerUsd <= 0) throw new Error('Tasa EUR/USD no disponible')
      // 1 USD = eurPerUsd EUR => 1 EUR = 1/eurPerUsd USD
      return (amount * (1 / eurPerUsd)).toFixed(2)
    }
    throw new Error('Moneda no soportada')
  }

  // Función para obtener el monto mínimo según la moneda
  const getMinAmount = () => {
    switch (selectedCurrency) {
      case 'PEN': return 3
      case 'USD': return 1
      case 'EUR': return 1
      default: return 3
    }
  }

  // Estados
  const [selectedAmount, setSelectedAmount] = useState(20) // Monto mínimo por defecto
  const [customAmount, setCustomAmount] = useState(20) // Monto mínimo por defecto
  const [isCustom, setIsCustom] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [donationDetails, setDonationDetails] = useState<{
    donorName: string
    amount: number
    transactionId: string
  } | null>(null)

  // Obtener el monto actual (preestablecido o personalizado)
  const getCurrentAmount = () => {
    return isCustom ? customAmount : selectedAmount
  }

  // Validar monto
  const isValidAmount = () => {
    const amount = getCurrentAmount()
    return amount && amount >= getMinAmount() // Min según la moneda seleccionada
  }

  // Función para crear la orden de PayPal
  const createOrder = (_data: any, actions: any) => {
    const amount = getCurrentAmount()

    if (!isValidAmount()) {
      const minAmount = getMinAmount()
      const currencySymbol = getCurrencySymbol()
      alert(`Por favor ingresa un monto válido de al menos ${currencySymbol} ${minAmount} ${getCurrencyName()}`)
      return Promise.reject(new Error("Invalid amount"))
    }

    setIsProcessing(true)

    // Convertir a USD usando la función de conversión
    const usdAmount = convertToUSD(amount)

    return actions.order.create({
      purchase_units: [{
        amount: {
          value: usdAmount,
          currency_code: "USD"
        }
      }],
      intent: "CAPTURE"
    })
  }

  // Función cuando se aprueba el pago
  const onApprove = (_data: any, actions: any) => {
    console.log("onApprove ejecutado!", _data)
    setIsProcessing(false)

    return actions.order.capture().then((details: any) => {
      console.log("Pago capturado!", details)
      setSuccess(true)

      // Mostrar mensaje de éxito
      const donorName = details.payer?.name?.given_name || "Donante"
      const amount = getCurrentAmount()

      // Guardar detalles para el modal
      setDonationDetails({
        donorName,
        amount,
        transactionId: details.id
      })
      setShowModal(true)

    }).catch((error: any) => {
      console.error("Error en capture:", error)
      setDonationDetails({
        donorName: "Donante",
        amount: getCurrentAmount(),
        transactionId: "Error en ID"
      })
      setShowModal(true)
      setSuccess(true)
    })
  }

  // Función para manejar errores
  const onError = (err: any) => {
    setIsProcessing(false)
    console.error("Error en el pago:", err)

    // Mostrar error más específico para debuggear
    let errorMessage = "Hubo un error procesando tu donación. Por favor intenta nuevamente."

    if (err.details && err.details.length > 0) {
      errorMessage = `Error: ${err.details[0].description || err.details[0].issue}`
    } else if (err.message) {
      errorMessage = `Error: ${err.message}`
    }

    alert(errorMessage)
  }

  // Función para manejar cancelación
  const onCancel = (_data: any) => {
    setIsProcessing(false)
    console.log("Pago cancelado")
  }

  // Función para cerrar modal y resetear
  const handleCloseModal = () => {
    setShowModal(false)
    setSuccess(false)
    setDonationDetails(null)
    setSelectedAmount(20) // Volver al monto mínimo
    setCustomAmount(20) // Volver al monto mínimo
    setIsCustom(false)
  }

  useEffect(() => {
    // Al cambiar de moneda, seleccionar el primer monto preestablecido de esa moneda
    const amounts = getPresetAmounts(selectedCurrency)
    if (amounts && amounts.length > 0) {
      setSelectedAmount(amounts[0].value)
      setCustomAmount(amounts[0].value)
      setIsCustom(false)
    }
  }, [selectedCurrency])

  return (
    <>
      <section className="mt-16 w-full py-15 bg-[#f4fbf8] px-4">
        <main className="max-w-3xl m-auto flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className='flex flex-col gap-5 items-center'>
            <h2 className='title'>Apoya Nuestra Misión</h2>
            <p className='description'>
              Tu contribución nos ayuda a llevar tecnología a más comunidades y crear oportunidades para niños y jóvenes en todo el Perú.
            </p>

          </header>

          {/* Contenedor principal */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 max-w-3xl m-auto w-full">
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <div className="text-green-400 mr-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-green-800 font-medium">¡Donación exitosa! Gracias por tu apoyo 💚</p>
                </div>
              </div>
            )}

            {/* Selector de moneda y montos preestablecidos */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-0">
                  Elige un monto para donar:
                </h3>

                {/* Selector de moneda */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Moneda:</span>
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    {(['PEN', 'USD', 'EUR'] as const).map((currency) => (
                      <button
                        key={currency}
                        onClick={() => {
                          setSelectedCurrency(currency)
                        }}
                        className={`px-3 py-1 text-sm font-medium transition-all ${selectedCurrency === currency
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                      >
                        {currency === 'PEN' ? 'Soles' : currency}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {getPresetAmounts().map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => {
                      setSelectedAmount(amount.value)
                      setCustomAmount(amount.value) // Actualizar el input también
                      setIsCustom(false)
                    }}
                    className={`p-4 border-2 rounded-lg font-medium transition-all ${!isCustom && selectedAmount === amount.value
                      ? 'border-st bg-[#f4fbf8] text-st font-semibold'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold text-sm sm:text-base">{amount.label}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Monto personalizado */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                O ingresa tu propio monto:
              </h3>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-base sm:text-lg">{getCurrencySymbol()}</span>
                </div>
                <input
                  type="number"
                  min={getMinAmount()}
                  step="1"
                  placeholder="0"
                  value={customAmount > 0 ? customAmount : ''}
                  onChange={(e) => {
                    const value = e.target.value
                    if (value === '') {
                      setCustomAmount(0)
                      setIsCustom(false)
                      setSelectedAmount(0) // Deseleccionar botones
                    } else {
                      const amount = parseFloat(value) || 0
                      setCustomAmount(amount)
                      setIsCustom(true)
                      setSelectedAmount(0) // Deseleccionar botones
                    }
                  }}
                  onFocus={() => {
                    setIsCustom(true)
                    setSelectedAmount(0) // Deseleccionar botones al hacer focus
                  }}
                  className={`w-full pl-10 pr-20 py-2 sm:py-3 border-2 rounded-lg text-base sm:text-lg ${isCustom
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                    } focus:outline-none focus:border-blue-500 focus:bg-blue-50`}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-base sm:text-lg">{getCurrencyName()}</span>
                </div>
              </div>
              <div className="h-6 mt-2">
                {isCustom && customAmount && !isValidAmount() && (
                  <p className="text-red-600 text-sm">
                    Por favor ingresa un monto de al menos {getCurrencySymbol()} {getMinAmount()} {getCurrencyName()}
                  </p>
                )}
              </div>
            </div>

            {/* Resumen */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Monto a donar:</span>
                <span className="text-2xl font-bold text-green-600">
                  {getCurrentAmount() ?
                    `${getCurrencySymbol()} ${getCurrentAmount()} ${getCurrencyName()}`
                    : `${getCurrencySymbol()} 0 ${getCurrencyName()}`}
                </span>
              </div>
            </div>

            {/* Botones de PayPal */}
            <div className="mb-6">
              {isValidAmount() ? (
                <div>
                  {/* Texto explicativo antes del botón */}
                  {!rateLoading && ((selectedCurrency !== 'PEN' && eurPerUsd > 0) || (selectedCurrency === 'PEN' && exchangeRate > 0)) ? null : (
                    <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-yellow-800 text-xs">
                        Obteniendo tasas de cambio... Por favor espera un momento.
                      </p>
                    </div>
                  )}
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start">
                      <div className="text-blue-500 mr-2 mt-0.5">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-blue-800 text-sm font-medium mb-1">
                          Puedes donar con tarjeta de crédito/debito o con Paypal
                        </p>

                      </div>
                    </div>
                  </div>

                  <div className="paypal-buttons-container relative -z-0">
                    <PayPalButtons
                      fundingSource="paypal"
                      style={{
                        layout: "vertical",
                        color: "blue",
                        shape: "rect",
                        label: "donate",
                        height: 50,
                      }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                      onCancel={onCancel}
                      disabled={isProcessing || rateLoading || (selectedCurrency === 'PEN' ? exchangeRate <= 0 : eurPerUsd <= 0)}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <p className="text-gray-500">
                    {getCurrentAmount() ?
                      `Ingresa un monto válido para continuar (mínimo ${getCurrencySymbol()} ${getMinAmount()} ${getCurrencyName()})` :
                      "Selecciona o ingresa un monto para donar"
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Información adicional */}
            <div className="text-center text-sm text-gray-500">
              <p className="mb-2">
                🔒 Pagos seguros procesados por PayPal
              </p>
              <p>
                Tu donación nos ayuda a seguir construyendo el futuro
              </p>
              {!rateLoading && exchangeRate > 0 && (
                <p className="mt-2 text-xs text-gray-400">
                  💱 Tasas actuales: 1 USD = S/ {exchangeRate.toFixed(2)} | 1 USD = € {eurPerUsd.toFixed(4)}
                </p>
              )}
            </div>

            {/* Explicación del mínimo - solo aparece cuando el monto es menor al mínimo */}
            {isCustom && customAmount > 0 && customAmount < getMinAmount() && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-2 mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-blue-800 text-xs font-medium mb-1">
                      ¿Por qué un mínimo de {getCurrencySymbol()} {getMinAmount()} {getCurrencyName()}?
                    </p>
                    <p className="text-blue-700 text-xs">
                      Las plataformas de pago cobran comisiones fijas por transacción. Con montos muy pequeños, casi todo se va en comisiones y no llega a nuestros proyectos. {getCurrencySymbol()} {getMinAmount()} {getCurrencyName()} es el mínimo para que tu donación tenga un impacto real 💙
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer informativo */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              ¿Tienes preguntas? Contáctanos en{" "}
              <a href="mailto:contacto@robbuild.com" className="text-blue-600 hover:underline">
                contacto@robbuild.com
              </a>
            </p>
          </div>

          {/* Modal de éxito */}
          {showModal && donationDetails && (
            <div
              className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  handleCloseModal()
                }
              }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden relative">
                {/* Header del modal */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center relative">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    ¡Donación Exitosa!
                  </h2>
                  <p className="text-green-100">
                    ¡Gracias por tu generoso apoyo!
                  </p>
                </div>

                {/* Contenido del modal */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    {/* Detalles de la donación */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="text-center mb-3">
                        <div className="text-2xl font-bold text-green-600">
                          {`${getCurrencySymbol()} ${donationDetails.amount} ${getCurrencyName()}`}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Procesado exitosamente
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-sm border-t pt-2">
                        <span className="text-gray-500">ID de transacción:</span>
                        <span className="text-gray-700 font-mono">
                          {donationDetails.transactionId.substring(0, 10)}...
                        </span>
                      </div>
                    </div>

                    <div className="text-center text-gray-600 mb-4">
                      <p className="mb-2">
                        Tu apoyo es muy valioso para <strong>RobBuild</strong>
                      </p>
                      <p className="text-sm">
                        Nos ayudas a seguir construyendo el futuro con robótica
                      </p>
                    </div>
                  </div>

                  {/* Botones del modal */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleCloseModal}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      ¡Perfecto!
                    </button>
                  </div>

                  {/* Botón de cerrar (X) en la esquina */}
                  <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </section>
      <Footer />
    </>
  )

}
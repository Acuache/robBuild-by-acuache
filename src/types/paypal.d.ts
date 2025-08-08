declare module '@paypal/react-paypal-js' {
  import * as React from 'react'

  export interface PayPalButtonsComponentProps extends React.ComponentProps<'div'> {
    style?: Record<string, any>
    createOrder?: (...args: any[]) => any
    onApprove?: (...args: any[]) => any
    onError?: (...args: any[]) => any
    onCancel?: (...args: any[]) => any
    disabled?: boolean
    fundingSource?: string
  }

  export const PayPalButtons: React.FC<PayPalButtonsComponentProps>

  export interface PayPalScriptProviderProps {
    options: Record<string, any>
    children?: React.ReactNode
  }
  export const PayPalScriptProvider: React.FC<PayPalScriptProviderProps>
} 
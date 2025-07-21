import { muniLima, democracia, upc } from "../../assets/images/support";
import { luffy1, luffy2, luffy3 } from '../../assets/images/frontPage'


export default function FrontPage() {
  const images = [luffy1, luffy2, luffy3]
  return (
    <main className="w-full h-dvh max-h-dvh" style={{ background: 'var(--gradient-st)' }}>
      <div className="h-9/10 px-4 max-w-7xl m-auto text-white text-center flex flex-col gap-5 items-center sm:flex-row sm:text-left">
        <div className="flex flex-col gap-8 sm:w-5/10">
          <h1 className="text-5xl">Tranformamos vidas con el poder de la educación</h1>
          <p className="">Brindamos talleres gratuitos, cursos en nuestra aula virtual y proyectos educativos con impacto solial para estudiantes y docentes.</p>
          <div className="flex gap-5 w-fit m-auto">
            <button className="border-2 border-white px-5 py-2 rounded-4xl bg-nd">Donar Ahora</button>
            <button className="border-2 border-white px-5 py-2 rounded-4xl bg-st">Ir al Aula Virtual</button>
          </div>
        </div>
        <div className="bg-red-800 min-w-80 overflow-hidden max-w-120 h-112 sm:w-5/10 ">
          <img className="w-full h-full object-cover" src={luffy1} />
        </div>
      </div>
      <footer className="h-1/10 bg-white text-center text-black flex flex-col gap-5 py-15">
        <p>Reconocidos y apoyados por</p>
        <section className="flex flex-wrap justify-center items-center gap-5">
          <article>
            <img src={muniLima} alt="Logo de Municipalidad de Lima" className="h-12 w-auto" />
          </article>
          <article>
            <img src={democracia} alt="Logo de Democracia Digital" className="h-12 w-auto" />
          </article>
          <article>
            <img src={upc} alt="Logo de UPC" className="h-12 w-auto" />
          </article>
        </section>
      </footer>
    </main>
  )
}   
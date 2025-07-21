import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='flex text-green text-greetext-6xl'>
      <nav>
        <ul className='flex gap-3'>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/talleres">Talleres</Link>
          </li>
          <li>
            <Link to="/voluntariados">Voluntariados</Link>
          </li>
          <li>
            <Link to="/donar">Donar</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
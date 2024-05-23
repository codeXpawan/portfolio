import { Link } from 'react-router-dom';
import '../styles/header.scss';

export default function Header() {
  return (
    <header className="header flex justify-between">
      <Link to="/" className='logo flex self-center'>
        <svg width="21" className='arrow-left' height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector 1" d="M17.0027 2.20547L4.99995 22.2075L17.0027 38.7945" stroke="#773C3C" strokeWidth="7.74345"/>
        </svg>
        <h3 className='codexpawan font-Handlee'>codexpawan<h3 className='font-Arbutus '>/ </h3></h3>
        <svg width="21" className='arrow-right' height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="Vector 1" d="M17.0027 2.20547L4.99995 22.2075L17.0027 38.7945" stroke="#773C3C" strokeWidth="7.74345"/>
        </svg>
      </Link>
      <ul className='navbar-list flex self-center gap-4 font-Inter'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="#projects">Projects</Link>
        </li>
        <li>
          <Link to="#education">Education</Link>
        </li>
        <li>
          <Link to="#contact">About me</Link>
        </li>
      </ul>
    </header>
  );
}
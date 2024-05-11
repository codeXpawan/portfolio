import '../styles/header.scss';

export default function Header() {
  return (
    <header className="header flex justify-between">
      <a href='#Home' className='logo flex self-center'>
      <svg width="21" className='arrow-left' height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector 1" d="M17.0027 2.20547L4.99995 22.2075L17.0027 38.7945" stroke="#773C3C" strokeWidth="7.74345"/>
      </svg>
      <h3 className='codexpawan font-Handlee'>codexpawan<h3 className='font-Arbutus '>/ </h3></h3>
      
      <svg width="21" className='arrow-right' height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector 1" d="M17.0027 2.20547L4.99995 22.2075L17.0027 38.7945" stroke="#773C3C" strokeWidth="7.74345"/>
      </svg>
      </a>
      <ul className='navbar-list flex self-center gap-4 font-Inter'>
        <li><a href="#Home">Home/</a></li>
        <li><a href="#about">About/</a></li>
        <li><a href="#projects">Projects/</a></li>
        <li><a href="#education">Education/</a></li>
        <li><a href="#contact">About me/</a></li>
      </ul>
    </header>
  );
}
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants';


const Nav = () => {
  return (
    <header className='padding-x padding-y z-10 w-full absolute'>

      <nav className='justify-between max-container items-center flex'>
        <a href="">
          <img src={headerLogo} alt="logo" width={160} height={29} />
        </a>
        <ul className='flex-1 items-center flex justify-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className=' font-montserrat leading-normal text-lg text-slate-gray'>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
import logo from './assets/img/logo.svg';
import box from './assets/img/cart.svg'

export const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo"/><img src={box} alt="box" />
    </div>

  )
}

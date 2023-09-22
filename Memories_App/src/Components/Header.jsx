import '../index.css';
import logo from '../assets/memories.png';

const Header = () => {
  return (
    <div className='logo'>
        <h1 style={{color:'wine', fontSize:'30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><span>Memories</span> <img src={logo} alt="logo" /> </h1>
    </div>
  )
}

export default Header
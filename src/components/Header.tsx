import { useState } from 'react';
import discordLogo from '../assets/discord.svg';
import twitterLogo from '../assets/twitter.svg';
import BurgerMenuButton from './BurgerMenuButton';

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false)


  function toggle() {
    setIsActive(prevState => !prevState);
  }
  
  return (
    <>
    <header className="header">
      <h2>Text Logo</h2>
      <nav className='nav'>
        <h2>Mints</h2>
        <div className="icons">
          <img src={discordLogo} alt="discord" />
          <img src={twitterLogo} alt="twitter" />
        </div>
      </nav>
      <BurgerMenuButton toggle={toggle} />
    </header>
    {isActive && (
      <div className='burger-content'>
        <h2>Mints</h2>
        <div className="icons">
          <img src={discordLogo} alt="discord" />
          <img src={twitterLogo} alt="twitter" />
        </div>
      </div>
    )}
    </>
  );
}

export default Header;

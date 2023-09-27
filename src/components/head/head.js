import './head.css';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/context';
import Carousel from './carousel/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/other/logo.png';
import headlines from './headlines.json';

function Head() {

  const { activeHeadline } = useContext(MyContext);
  const [loginToggle, setLoginToggle] = useState(false);
  const [scroll,setScroll] = useState(true);


  const handleScrolling = (e) => {
    if (e.deltaY < 0) {
      if (scroll === false) {
        setScroll(true);
      }
    }else{
      if (scroll === true) {
        setScroll(false);
        setLoginToggle(false);
      }
    }
  }

  window.addEventListener("wheel",handleScrolling);

  return (
    <div className='head'>

      <div className={`head-top ${scroll ? 'show-scroll' : ''}`}>
        <img src={logo} alt='icon' />

        <div 
          className={ `login-toggle ${loginToggle ? 'login-toggle-active': ''}`}
          onClick={()=>setLoginToggle(loginToggle ? false : true)}  
        >
          <FontAwesomeIcon
            icon={faUser}
            className='user-icon'
          />
          <div className='user-menu'>
            <div className='user-menu-item'>Sign In</div>
            <div className='user-menu-item'>Join Social Club</div>
          </div>
        </div>
      </div>

      <div className='head-body'>
        <div className={`head-body-background img-${activeHeadline}`}>

          {
            headlines
              .filter(item => item.id === activeHeadline)
              .map((item, key) => (
                <div className='hdb-content' key={key}>
                  <h4>{item.game}</h4>
                  <h1>{item.headline}</h1>
                  <button className='watch-now'>WATCH NOW</button>
                </div>
              ))
          }

          <Carousel />

        </div>
      </div>

    </div>
  );
}

export default Head;

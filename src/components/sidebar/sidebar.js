import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Sidebar() {

    const [sidebar,setSidebar] = useState(false);

  return (
    <>
    <div className={sidebar ? 'sidebar sidebar-active' : 'sidebar'}>
        <input type='text' placeholder='Search...'/>

        <div className='menu'>
            <div className='menu-item'>Newswire</div>
            <div className='menu-item'>Games</div>
            <div className='menu-item'>Videos</div>
            <div className='menu-item'>Downloads</div>
            <div className='menu-item'>
                Support
                <FontAwesomeIcon 
                    icon={faShareFromSquare} 
                    transform="shrink-4 left--4" 
                    className='menu-item-i'
                />
            </div>
            <div className='menu-item'>
                Social Club 
                <FontAwesomeIcon 
                    icon={faShareFromSquare} 
                    transform="shrink-4 left--4" 
                    className='menu-item-i' 
                />
            </div>
            <div className='menu-item'>
                Launcher
                <FontAwesomeIcon 
                    icon={faShareFromSquare} 
                    transform="shrink-4 left--4" 
                    className='menu-item-i' 
                />
            </div>
            <div className='menu-item'>
                Store
                <FontAwesomeIcon 
                    icon={faShareFromSquare} 
                    transform="shrink-4 left--4" 
                    className='menu-item-i' 
                />
            </div>
        </div>

        <div 
            className='sidebar-toggler'
            onClick={()=>setSidebar(sidebar ? false : true)}
        ></div>
        <div className='sidebar-toggler-inside'></div>

    </div>
    </>
  );
}

export default Sidebar;

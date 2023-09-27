import './footer.css';
import logo from '../../assets/other/logo.png';
import icons from'./icons.json';

function Sidebar() {

  return (
    <footer className='footer'>
        <img src={logo} className='footer-logo' alt='Rockstar'/>
        <h1>Rockstar Games</h1>
        <span className='footer-descr'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
        <div className='social-media'>
                 {
                    icons.map((icon,index)=>(
                        <div className='sm-button' key={index}>
                           <svg xmlns='http://www.w3.org/2000/svg' width='17' height='17' viewBox={icon.viewbox}><path d={icon.icon}/></svg>
                        </div>
                    ))
                 }
        </div>
        <div className='footer-bottom'>
            <span>Contact</span>
            <span>Careers</span>
            <span>Subscribe</span>
            <div>
                <select 
                    className='select-lan'
                    defaultValue={1}

                >
                    <option value='1'>English</option>
                    <option value='2'>Deuthsch</option>
                    <option value='3'>Français</option>
                    <option value='4'>Italiano</option>
                    <option value='5'>Espanol</option>
                    <option value='6'>Türkçe</option>
                </select>
            </div>
        </div>
    </footer>
  );
}

export default Sidebar;

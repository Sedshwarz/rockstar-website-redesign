import './newswire.css';
import signboard from '../../assets/other/splash-signboard.png';
import img1 from '../../assets/newswire/1.jpg';
import img2 from '../../assets/newswire/2.jpg';
import img3 from '../../assets/newswire/3.jpg';
import img4 from '../../assets/newswire/4.jpg';
import img5 from '../../assets/newswire/5.jpg';
import img6 from '../../assets/newswire/6.jpg';
import newswires from './newswires.json';

function Newswire() {

    const imgAry = [img1, img2, img3, img4, img5, img6];

    return (
        <div className="newswire">
            <img src={signboard} className='signboard' alt='Newswire' />

            <div className='newswire-body'>

                {
                    newswires.map((item,index) => (
                        <div className='newswire-card' key={index}>
                            <img src={imgAry[index]} alt='NewswireImage' />

                            <div className='nc-front'>
                                <div className='nc-front-bottom'>
                                    <span id='ncfbc-1'>{item.game}</span>
                                    <span id='ncfbc-2'>{item.date}</span>
                                    <span id='ncfbc-3'>{item.headline}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='view-more'>View More</div>
        </div>
    );
}

export default Newswire;

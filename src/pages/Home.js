import banner from '../images/banner.png'
import { Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import './index.css'
const Home = () => {
    const history = useHistory();
    return (
        <div className='d-flex flex-row home_container bg-sec'  style={{height:window.innerHeight - 60}}>

            <div className='col-7 d-flex align-items-center justify-content-center' style={{}}>
                <img src={banner} alt='banner' style={{ width: '65%' }} />
            </div>
            <div className='col-5 flex-column pe-5 d-flex align-items-center' style={{}}>
                <p className='name'>Indiana Financial Servises</p>
                <p className='d-flex text-justify c-primary'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
                <div className='d-flex flex-row justify-content-around w-100'>
                    <Button className='d-flex' bsPrefix='contact-btn' onClick={()=>history.push('contact-us')}>Contact Us</Button>
                    <Button className='d-flex' bsPrefix='about-btn' onClick={()=>history.push('about-us')}>About Us</Button>
                </div>
            </div>
        </div>
    )
}
export default Home;
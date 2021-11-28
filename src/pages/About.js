import banner from '../images/contact.gif'
import { Button } from 'react-bootstrap'
const AboutUs=()=>{
    return(
        <div className='d-flex flex-row home_container bg-sec'  style={{height:window.innerHeight - 60}}>

        <div className='col-5 flex-column center ps-5' style={{}}>
            <p className='name'>Indiana Financial Servises</p>
            <p className='d-flex text-justify c-primary'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p>
            <div className='d-flex flex-row justify-content-around w-100'>
                <Button className='d-flex' bsPrefix='contact-btn' onClick={()=>{}}>Contact Us</Button>
                <Button className='d-flex' bsPrefix='about-btn' onClick={()=>{}}>About Us</Button>
            </div>
        </div>
        <div className='col-7 center' style={{}}>
            <img src={banner} alt='banner' style={{ width: '65%' }} />
        </div>
    </div>
    )
}
export default AboutUs;
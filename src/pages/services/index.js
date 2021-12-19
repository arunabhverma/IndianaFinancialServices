import { Row } from 'react-bootstrap';
import Cards from './Cards'
const Services = () => {
    let data = [
        {
            title: 'Our Customers',
            number: 1234567,
            text: 'Total numbr of customers',
        },
        {
            title: 'Our Users',
            number: 34567,
            text: 'Total numbr of Users',
        },
        {
            title: 'Our Customers',
            number: 1234567,
            text: 'Total numbr of customers',
        },
        {
            title: 'Our Users',
            number: 34567,
            text: 'Total numbr of Users',
        }
    ]
    return (
        <div className='bg-sec' style={{height:window.innerHeight -60}}>
            <Row className='d-flex m-0 justify-content-center align-items-center'>
                <p className='name text-center'>Services</p>
            </Row>
            <Row className='m-0'>
                {
                    data.map((item, i) => {
                        return (
                            <Cards item={item}/>
                        )
                    })
                }
            </Row>
        </div>
    )
}
export default Services;
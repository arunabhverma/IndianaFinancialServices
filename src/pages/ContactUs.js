import { useState } from 'react';
import { Form, Row, Col,Image } from 'react-bootstrap';
import TextInput from '../components/TextInput'
import Pressable from '../components/Pressable'
import contact from '../images/contact.gif';
const ContactUs = () => {
    const [state, setState] = useState({});
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    console.log("STATE", state);
    return (
        <div className='bg-fff d-flex justify-content-center flex-column align-items-center'>
            <p className='name'>Contact Us</p>
            <Row className='d-flex flex-row w-100'>
                <Col className='d-flex justify-content-end'>
                    <Form style={{}} className='w-75 bg-sec p-4 rounded shadow' >
                        <TextInput label='Full Name' placeholder='Enter your name here' value={state.name} name='name' onChange={handleChange} />
                        <TextInput label='Email Address' placeholder='Enter your email here' value={state.email} name='email' onChange={handleChange} />
                        <TextInput label='Phone Number' placeholder='Enter your phone number here' value={state.mobile} name='mobile' onChange={handleChange} />
                        <TextInput label='SUBJECT' placeholder='' value={state.subject} name='subject' onChange={handleChange} />
                        <TextInput label='BODY' placeholder='write something...' value={state.message} name='message' onChange={handleChange} as='textarea' />
                        <Pressable title='SUBMIT MESSAGE' onPress={()=>alert("Sending message...")}/>
                    </Form>
                </Col>
                <Col className=' d-flex flex-column align-items-center justify-content-center'>
                    <Image src={contact} alt='' className='w-75 h-75 border-bottom border-secondary shadow' />
                    <div className='d-flex flex-row f-12 justify-content-between w-75 shadow'>
                        <div>
                            <p className='text-bold'>OUR ADDRESS</p>
                            <p>Address ......</p>
                            <p>City ......</p>
                            <p>Pin code ......</p>
                        </div>
                        <div>
                            <p>Please contact us at:</p>
                            <p>contact@indiana.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default ContactUs;
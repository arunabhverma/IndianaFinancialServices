import { useState } from 'react';
import CountUp from 'react-countup';
import { Col, Card } from 'react-bootstrap';
const Cards = ({ item }) => {
    const [state, setState] = useState(false)
    return (
        <Col>
            <Card bg={'info'} className='' text='dark' onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
                <Card.Body style={{ height: '100px' }} className='center'>

                    {!state && <Card.Title className='f-22' className='center flex-column'>
                        <Card.Text>{item.title}</Card.Text>
                        <CountUp
                            start={0}
                            end={item.number}
                            duration={3.30}
                        />
                    </Card.Title>}
                    {state && <Card.Text className='f-16 text-center'>{item.text}</Card.Text>}
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Cards;
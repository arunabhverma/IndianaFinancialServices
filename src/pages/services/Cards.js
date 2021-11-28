import { useState } from 'react';
import CountUp from 'react-countup';
import { Col, Card } from 'react-bootstrap';
const Cards = ({ item }) => {
    const [state, setState] = useState(false)
    return (
        <Col>
            <Card bg={item.bg} text='dark' onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>
                <Card.Header>{item.title}</Card.Header>
                <Card.Body style={{ height: '100px' }} className='center'>

                    <Card.Title className='f-22' style={{ display: !state ? 'flex' : 'none' }}>
                        <CountUp
                            start={0}
                            end={item.number}
                            duration={4.00}
                        />
                    </Card.Title>
                    {state && <Card.Text className='f-16 text-center'>{item.text}</Card.Text>}
                </Card.Body>
            </Card>
        </Col>
    )
}
export default Cards;
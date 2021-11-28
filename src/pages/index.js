import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './services';
import ContactUs from './ContactUs';

import '../App.css'
const App = () => {
    return (
        <Router>
            <div className='d-flex flex-column'>
                <Navbar expend='lg'  style={{backgroundColor:'#b9efd5',height:'60px'}} collapseOnSelect={true} variant="light" className='c-primary'>
                    <Container>
                        <Navbar.Brand href="/" className='c-primary' >Logo</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-flex' />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-flex'> */}
                        <Nav >
                            <Nav.Item>
                                <Nav.Link href="/" className='c-primary bold'>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about-us" className='c-primary bold'>About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/servises" className='c-primary bold'>Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact-us" className='c-primary bold'>Contect Us</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link href="/search" className='c-primary bold'>Search</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                        {/* </Navbar.Collapse> */}
                    </Container>
                </Navbar>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about-us' exact component={About} />
                    <Route path='/servises' exact component={Services} />
                    <Route path='/contact-us' exact component={ContactUs} />
                </Switch>
            </div>
        </Router>
    )
}
export default App;
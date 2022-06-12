import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Services from './services';
import ContactUs from './ContactUs';
import MainPage from './MainPage';
import {NavBar} from '../components';
import '../App.css'

const App = () => {
    return (
        <Router>
            <div className='d-flex flex-column'>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={MainPage} />
                    <Route path='/about-us' exact component={About} />
                    <Route path='/servises' exact component={Services} />
                    <Route path='/contact-us' exact component={ContactUs} />
                </Switch>
            </div>
        </Router>
    )
}
export default App;
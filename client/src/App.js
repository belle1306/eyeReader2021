import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomePage from '../pages/HomePage';
import AuthorPage from '../pages/AuthorPage';


function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/author" component={AuthorPage} />
        
        </Switch>
      </Router>
    </div>
  );
}






export default App;

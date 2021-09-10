import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Add from './Add';
import AuthScreen from './AuthScreen';

function App() {
  return(
    <Router>
      <Route exact path="/" component={Add} />
      <Route exact path="/auth" component={AuthScreen} />
    </Router>
  )
}

export default App;

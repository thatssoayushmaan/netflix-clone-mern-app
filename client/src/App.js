import "./App.css"
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { useContext } from "react";
import {AuthContext} from './Context/authContext/AuthContext'



const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            {user ? <Home/> : <Redirect to="/register"/>} 
          </Route>
          <Route exact path='/register'>
            {!user ? <Register/> : <Redirect to="/home"/>} 
          </Route>
          <Route exact path='/login'>
            {!user ? <Login/> : <Redirect to="/home"/>} 
          </Route>
          {user && (
            <>
          <Route exact path='/movies'>
            <Home type="movie"/>
          </Route>
          <Route exact path='/series'>
            <Home type="series"/>
          </Route>
          <Route exact path='/watch'>
            <Watch/>
          </Route>
          </>
          )
          }
      </Switch>
    </BrowserRouter>
  )
};

export default App;
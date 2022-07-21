
import './App.css';
 import { useEffect } from 'react';
 import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes'
 import { fetchAllQuestions } from './Actions/question';
import { fetchAllUsers } from './Actions/Users';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (

    <div className='App'>
      <Router>
        <Navbar />
        <AllRoutes />

      </Router>
    </div>

  );
}


export default App;

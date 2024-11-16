
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import { useEffect } from 'react';
import { fetchAllData } from './slices/dataSlice';

function App() {
  const dispatch=useDispatch();
  const {loading}=useSelector((state)=>state.dataReducer);
  useEffect(()=>{
    dispatch(fetchAllData());
  },[])
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      {/* ticket */}
    </div>
  );
}

export default App;

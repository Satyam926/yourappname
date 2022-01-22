
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import { DataProvider } from './CategoryContext';
import Bollywood from './Components/Category/Bollywood';
import Fitness from './Components/Category/Fitness';
import Food from './Components/Category/Food';
import Hollywood from './Components/Category/Hollywood';
import Technology from './Components/Category/Technology';
import './Components/Style/Style.css'
import Header from './Header';
import Home from './Home';
import ArtReading from './Components/ArtReading';

function App() {
  return (
    <DataProvider>
      
      <BrowserRouter>
         <Header/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/bollywood' element={<Bollywood/>}/>
           <Route path='/hollywood' element={<Hollywood/>}/>
           <Route path='/fitness' element={<Fitness/>}/>
           <Route path='/technology' element={<Technology/>}/>
           <Route path='/food' element={<Food/>}/>
           <Route path='/artReading/:stdID' element={<ArtReading/>}/>

         </Routes>
      </BrowserRouter>
       

    </DataProvider>
  );
}
export default App;

 

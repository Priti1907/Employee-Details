//import logo from './logo.svg';
import './App.css';
import EmplyCreate from './Components/EmplyCreate';
import EmplyDetail from './Components/EmplyDetail';
import EmplyEdit from './Components/EmplyEdit';
import EmplyList from './Components/EmplyList';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Js Curd Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmplyList/>}></Route>
          <Route path='/employee/create' element={<EmplyCreate/>}></Route>
          <Route path='/employee/detail/:empid' element={<EmplyDetail/>}></Route>
          <Route path='/employee/edit/:empid' element={<EmplyEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;

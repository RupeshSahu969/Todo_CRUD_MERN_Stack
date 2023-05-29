import logo from './logo.svg';
import './App.css';
import MainRoute from './Pages/MainRoute';
import TodoForm from './Pages/TodoForm';
import SignUp from './Pages/SignUp';
import Navbar from './Componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <MainRoute/>
     {/* <TodoForm/> */}
     {/* <SignUp/> */}
    </div>
  );
}

export default App;

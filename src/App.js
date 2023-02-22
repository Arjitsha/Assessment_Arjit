import logo from './logo.svg';
import './App.css';
import Cards from './Card';
import Search from './Search';
import InfiniteScroll from 'react-infinite-scroll-component'


function App() {
  return (
   
    <div className="App">
       
       <Search></Search>
  
      <br></br>
      <br></br>
      <Cards></Cards>
    
    
    </div>
    
  );
}

export default App;

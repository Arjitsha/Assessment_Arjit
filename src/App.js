import logo from './logo.svg';
import './App.css';
import Cards from './Card';
import Search from './Search';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

let page = 1;
const fetchData = (setItems, items) => {
 axios
   .get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)
   .then((res) => {
     setItems([...items, ...res.data]);
     page = page + 1;
   });
};
 
const refresh = (setItems) => {};
function App() {
  

  const [items, setItems] = useState([]);
   useEffect(()=>{
    fetchData(setItems,items)
  },[])
  return (
    
    <div className="App">
       <InfiniteScroll
     dataLength={items.length} 
     next={() => {
       fetchData(setItems, items);
     }}
     hasMore={true}
     loader={<h4>Loading...</h4>}
     endMessage={
       <p style={{ textAlign: "center" }}>
         <b>Completed</b>
       </p>
     }
    
     refreshFunction={refresh}
     pullDownToRefresh
     pullDownToRefreshThreshold={50}
     pullDownToRefreshContent={
       <h3 style={{ textAlign: "center" }}># 8595; Pull down to refresh</h3>
     }
     releaseToRefreshContent={
       <h3 style={{ textAlign: "center" }}># 8593; Release to refresh</h3>
     }
   >
     <div style={{ minHeight: "100vh" }}>
       {items.map((user) => (
         <img src={user.url} height="100px" width="200px" />
       ))}
     </div>

       <Search></Search>
  
      <br></br>
      <br></br>
      
      <Cards></Cards>
      </InfiniteScroll>
    
     
    </div>
    
    
  );
}

export default App;

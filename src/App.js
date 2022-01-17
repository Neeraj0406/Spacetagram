import React,{useState,useEffect} from 'react'
import Navbar from './Component/Navbar'
import Card from "./Component/Card"
import InfiniteScroll from 'react-infinite-scroll-component'
// require('dotenv').config()


const App = () => {

  let [allData , setAllData] = useState([])
    

  const loadData =async (count = 5)=>{
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=W1e9ao3FrIYvhg1SBII7XBhVbqHj3Ede8FtyTrPX&count=${count}`)
    const result = await res.json();
    setAllData([...allData , ...result])
    
   
  
  }
  console.log(allData);
  

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <Navbar/>

      <InfiniteScroll 
        dataLength={allData.length}
        next={loadData}
        hasMore = {true}
        loader={<h1 style={{textAlign:"center", marginTop : "5px"}}> Data is loading...</h1>}
      >
      
      {
        allData.length>0 ? 
            allData.map((data , id) =>(
            
            <Card {...data} key={id} />
          ))
        :
        <p> </p>
        
      }
      </InfiniteScroll>
     
      
    </>
  )
}

export default App

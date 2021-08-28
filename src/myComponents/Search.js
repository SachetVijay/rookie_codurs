import React, {useState,useEffect} from 'react';

function Search() {
  const [result, setResult]=useState([]);
  const [value, setValue]=useState(localStorage.getItem('id'));
    useEffect(() =>{
      if(value.length >0){
        fetch('https://hackout-815ba-default-rtdb.firebaseio.com/main.json').then(
        response => response.json()
      ).then(responseData =>{
        setResult([]);
        let searchQuery = value.toLowerCase();
        for(const key in responseData){
          let main= responseData[key].name.toLowerCase();
          if(main.slice(0,searchQuery.length).indexOf(searchQuery)!== -1){
            setResult(prevResult =>{
              return [...prevResult,responseData[key].name]
            });
          }
        }
      }).catch(error =>{
        console.log(error);
      })
    }else{
      setResult([]);
    }
  },[value])
  return (
      <div>
{result.map((result,index) =>(
<a href="#" key={index}>
<div>
{result}
</div>
</a>
))}
    </div>
  );
  }

export default Search

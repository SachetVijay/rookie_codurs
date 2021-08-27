import React, {useState,useEffect} from 'react';
function Search() {
  const [value, setValue]=useState(localStorage.getItem('id'));
  const [result, setResult]=useState([]);

    useEffect(() =>{
      if(value.length >0){
        fetch('https://hackout-815ba-default-rtdb.firebaseio.com/').then(
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
dsdsda
        </div>
    )
}

export default Search

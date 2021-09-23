import React, { Component } from 'react'

 class ListRendering extends Component {
    
    render() {
        const data= [
            {id:1,name: 'Sateesh', place: 'akp', age:'26'},
            {id:2,name: 'Sai', place: 'akp', age:'23'},
            {id:3,name: 'manoj', place: 'vizag', age:'26'},
            {id:4,name: 'jessu', place: 'cdm', age:'25'}]

        return (
            <div>
          <h2>{data[0].name}</h2>
          <h2>{data[1].name}</h2>
          <h2>{data[2].name}</h2>
          <h2>{data[3].name}</h2> 
        </div>
        )
    
     }

 }


  export default ListRendering;


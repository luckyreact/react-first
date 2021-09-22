import React, { Component } from 'react'

export class ListRendering extends Component {

    render() {
        const data = [{id:1,name:'bunny',place:'akp',age:'25'},{id:2,name:'sunny',place:'vizag',age:'30'},{id:3,name:'honey',place:'gajuwaka',age:'34'}]
        return (
            <div>
                {data.map((x)=>(
                <h1 key={x.id}>Name:{x.name} ,place:{x.place} ,age:{x.age}</h1>
                )
                )}
                {/* <h1>{data[0].name}</h1>
                <h1>{data[1].name}</h1>
                <h1>{data[2].name}</h1> */}
               
            </div>
        )
    }
}

export default ListRendering

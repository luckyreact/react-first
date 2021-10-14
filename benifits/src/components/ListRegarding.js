import Ract, { Component } from 'react'
export class ListRegarding extends Component {
    render(){
        const data =[{name:"Lucky",place: "MPK", age:"28"},{name:"RAM",place: "BLR", age:"28"},{name:"Siva",place: "HYD", age:"30"}]
        return(
            <div>
                 {data.map(x=><h1>
                     Name:{x.name}   Place:{x.place}    age:{x.age}</h1>)}
                     {/* <h1> {data[0].name}</h1>
                     <h1> {data[1].name}</h1>
                     <h1> {data[2].name}</h1>
                     <h1> {data[0].age}</h1>
                     <h1> {data[1].age}</h1>
                     <h1> {data[2].age}</h1>
                     <h1> {data[0].place}</h1>
                     <h1> {data[1].place}</h1>
                     <h1> {data[2].place}</h1> */}
            </div>
        )
    }
}
export default ListRegarding;
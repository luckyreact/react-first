import React, { Component } from 'react'

class EditObject extends Component {
   

  objInArray = [ {id:1,movie:'bahubali',hero:'prabas',actress:'anuska'},
                 {id:2,movie:'julay',hero:'alluarjun',actress:'illeana'},
                 {id:3,movie:'one',hero:'maheshBabu',actress:'ShraddaKapoor'} ]

  objInArray2 = this.objInArray.map((x)=>{
       if(x.id == 3){
           return {
               ...x,
               actress:'tammana'
           }
       }
       return x;
  })

    
    render() {
      console.log(this.objInArray2);
        return (
            <div>
                <h1>Obj edit</h1>
            </div>
        )
    }
}

export default EditObject

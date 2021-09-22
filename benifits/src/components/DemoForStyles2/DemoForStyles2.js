import React, { Component } from 'react'
import './DemoForStyle2.css'

class DemoForStyles2 extends Component {
    render() {
        let movies =["Bahubali","RRR","Vikramarkudu","yemaDonga",'sye']
        let moviesObj =[{id:1,movie:"Bahubali",hero:'Prabas',actress:'Anuska'},
                        {id:2,movie:"RRR",hero:'Ntr',actress:'Alibhat'},
                        {id:3,movie:"sye",hero:'Nitin',actress:'genelia'},
                        {id:4,movie:"yamadonga",hero:'Ntr',actress:'priyamani'}
                    ]
        return (
            <>
            {moviesObj.map((x)=>
                <div className='Parent' key={x.id}>
                    <div>
                  <h3> Movie Name:  {x.movie}</h3>
                  <h3>  Hero : {x.hero}</h3>
                  <h3> Actress:  {x.actress}</h3>
                  </div>
                </div>
                 )
               }

                {/* <div className='Parent'>
                  <h2>  {movies[1]}</h2>
                </div>
                <div className='Parent'>
                  <h2>  {movies[2]}</h2>
                </div> */}
          
            </>
           
        )
    }
}

export default DemoForStyles2

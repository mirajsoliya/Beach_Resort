import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail,FaHiking,FaBeer,FaShuttleVan} from "react-icons/fa";
export default class Services extends Component {
    state={
        services :[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:' lorem hello  ghhs bdhbhba bvsh bdbhsb bvhjbj dbhsbd bhdsb bjhd bjdfhs buiuhfd!'

            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:' lorem hello  ghhs bdhbhba bvsh bdbhsb bvhjbj dbhsbd bhdsb bjhd bjdfhs buiuhfd!'

            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:' lorem hello  ghhs bdhbhba bvsh bdbhsb bvhjbj dbhsbd bhdsb bjhd bjdfhs buiuhfd!'

            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:' lorem hello  ghhs bdhbhba bvsh bdbhsb bvhjbj dbhsbd bhdsb bjhd bjdfhs buiuhfd!'
            }

        ]
    }
  render() {
    return (
      <section className="services">
      <Title title="services"/>
      <div className='services-center'>
        {this.state.services.map((item,index)=>{
          return<article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>  
        })}
      </div>
      

      </section>
     
    );
  }
}

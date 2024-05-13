import React from 'react'

const Fiveday = ({datafive}) => {
  return (
    <div>
        
        {datafive.length >=1 ? (
            datafive.map((item)=>{
                return (
                    <div className="info-mr d-flex">
                    <div className="imaage col-4">
                        <img src= {item.imge}/>
                        <p>{item.name}</p>
                    </div>
                    <div className="bord col-4 px-2">
                        <p>{item.subject}</p>
                    </div>
                    <div className="bord col-4 px-2">
                        <p>{item.time}</p>
                    </div>
                    </div>
                )
            })
        ) : "لا يوجد عناصر"}
    </div>
  )
}

export default Fiveday;
import React from 'react'

const Sixday = ({datasix}) => {
  return (
    <div>
         {datasix.length >= 1? (
            datasix.map((item)=>{
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
        ): null}
    </div>
  )
}

export default Sixday
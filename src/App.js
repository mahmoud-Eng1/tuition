import React, { useState } from "react";
import Days from './component.js/days';
import Content from './component.js/content';
import Firstday from './component.js/firstday';
import Secondday from "./component.js/secondday";
import Thiredday from "./component.js/thiredday";
import Fourdata from "./component.js/fourdata";
import Fiveday from "./component.js/fiveday";
import Sixday from "./component.js/sixday";
import Home from "./component.js/home"
import {data1,  data2, data3, data4, data5, data6 } from "./component.js/data";
import {Route,Routes} from "react-router-dom"

function App() {
  const [alldata, setalldata] = useState(data1 ,data2,data3, data4,data5,data6)
  return (
    <div>
     <div>
        <div>
        <div className="container" >
            <div className="content">
            <Days/>
            <Content/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/saturday" element={<Firstday dataonce={data1}/>} />
                <Route path="/sunday" element={<Secondday datasecond= {data2}/>}/>
                <Route path="/monday" element={<Thiredday datathired= {data3}/>}/>
                <Route path="/tusday" element={<Fourdata datafour={data4}/>}/>
                <Route path="/wednesday" element={<Fiveday datafive={data5}/>} />
                <Route path="/thursday" element={<Sixday datasix= {data6} />} /> 
                </Routes>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default App;

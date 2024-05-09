import { useState, useEffect } from 'react';

function MyClockTime() {
  const [ctime, setCTime] = useState(new Date());
    

  // const gubun = nowStr.substring(0, 2) ;
  // const st = {
  //               color : "yellow", 
  //               fontWeight : "bold"
  //             } ;

  // let divStyle ;
  // if (gubun == '오전') divStyle = "div1" ;
  // else divStyle = "div2" ;
  useEffect(()=>{
    const tm = setInterval(()=>{
      setCTime(new Date())
    },1000);
    return ()=>{
      clearInterval(tm);
    }
  },[])

  return(
      <div className="text-blue-900 text-2xl font-bold mt-5">
        {ctime.toLocaleTimeString()}
      </div> 
  );
}

export default MyClockTime ;
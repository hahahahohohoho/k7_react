import MyDiv2 from "./MyDiv2";
//useState import
import { useState } from "react"; 

export default function MyDiv() {
  //2. state 변수 선언
  const [n, setN] = useState(0);

  const dname1 = 'div1'
  const dname2 = 'div2'
  const dname3 = 'div3'
  let cnt = 0;

  const handleCount = () =>{
    cnt = cnt+1;
    setN(n+1);
    console.log(cnt)
  }

  return (
    <div className="flex flex-col p-2 m-2 w-2/3 h-2/3 justify-center items-center bg-red-500 w-full text-white text-3xl">
      <MyDiv2 dn1 = {dname1} dn2={dname2} dn3 = {dname3}/>
      <div className="flex w-full justify-end items-center border p-3 m-5">
        <span className="inline-flex p-0.5 mx-3" onClick={handleCount}>
          ❤
        </span>
        <span>
          {n} 
          {/* 변수만 바꾸면 페이지에 직접 반영되지 않음 hook state설정 필요 */}
        </span>
      </div>
    </div>
  )
}

import ButtonC from "../UI/ButtonC"
import Ball from "./Ball"
import {useState} from "react"; 



export default function Lotto() {
    const [tags, setTags] = useState();
    const handleOK = () =>{
        let arr = [];
        while(arr.length<7){
            let n = Math.floor(Math.random() * 45) + 1
            if(!arr.includes(n))arr.push(n);
        }
        // arr.sort();
        let tm = arr.map((item)=> <Ball n={item} key={item}/>);
        tm.splice(6,0, <span className="text 3xl mx-2"key="sp">+</span>)
        setTags(tm)
    }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="w-2/3 h-1/6 bg-yellow-100 p-2 my-2 flex justify-center items-center text-2xl font-bold">로또번호 추출하기</p>
        <div className="flex flex-col justify-center items-center w-2/3 h-5/6 p-2 my-2">
            <div className="flex justify-center items-center h-2/3">
                {tags}
            </div>
            <div className="h-1/3">
                <ButtonC caption={'확인'} bcolor={'blue'} handleClick={handleOK}/>
            </div>
        </div>
    </div>
  )
}

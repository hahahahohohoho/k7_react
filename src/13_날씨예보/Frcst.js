import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import SelectC from "../UI/SelectC"
import getxy from './getxy/getxy.json';
import ButtonC from '../UI/ButtonC'

export default function Frcst() {
  // const [date, setDate] = useState()
  const [op, setOp] = useState()
  const [x, setX] = useState()
  const [area, setArea] = useState()
  const [y, setY] = useState()
  const selDate = useRef()
  const selOp = useRef()
  const navigate = useNavigate()
  const handleUrl = (gubun)=>{
    if (!x || !y || !selDate.current.value) {
      alert('날짜와 지역을 선택하세요')
      return
    }
    navigate(`/frclst?gubun=${gubun}&x=${x}&y=${y}&dt=${selDate.current.value.replaceAll('-','')}&area=${area}`)
  }
  const handleArea = ()=>{
    
    let tm = getxy.filter(item => item['1단계'] === selOp.current.value)
    tm = tm[0]
    setArea(tm['1단계'])
    setX(tm['격자 X'])
    setY(tm['격자 Y'])
  }
  function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

  useEffect(() => {
    
    let tm = getxy.map(item => item['1단계'])
    setOp(tm)
  }, [])
  return (
    <div className="w-full h-full flex flex-col items-center">
        <div className="flex , m-5 justify-center items-center">
          <input type="date" max={getToday()}
            className="mx-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 "
            id='date' ref={selDate} />
          <SelectC initMsg='지역을 선택하세요' ops={op} selRef={selOp} handleChange ={handleArea}/>
          <div className="flex justify-center items-center text-xl font-bold">
            <ButtonC caption={'단기예보'} bcolor={'blue'} handleClick={()=>{handleUrl('단기')}}/>
            <ButtonC caption={'초단기예보'} bcolor={'blue'} handleClick={()=>{handleUrl('초단기')}}/>
          </div>
        </div>
    </div>
  )
}

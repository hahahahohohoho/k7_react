import ButtonC from '../UI/ButtonC'
import { AtomN } from "./AtomN";
import { useRecoilState } from "recoil";

export default function Recoildiv3() {
    const [n,setN] = useRecoilState(AtomN)
    const handleUp = ()=>{
        setN(n+1)
    }
    const handleDown = ()=>{
        setN(n-1)
    }
    const handleSave = ()=>{
        localStorage.setItem("n",n)
    }
    const handleDel = ()=>{
        localStorage.removeItem("n")
        setN(0)
    }
  return (
    <div>
      Recoildiv3 : n = {n}
      <div>
        <ButtonC caption='증가'
                bcolor='blue'
                handleClick={handleUp}/>
        <ButtonC caption='감소'
                bcolor='blue'
                handleClick={handleDown}/>
        <ButtonC caption='local 저장'
                bcolor='blue'
                handleClick={handleSave}/>
        <ButtonC caption='삭제'
                bcolor='blue'
                handleClick={handleDel}/>
      </div>
    </div>
  )
}

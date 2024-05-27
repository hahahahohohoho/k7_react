import { useState, useEffect} from "react"
import Recoildiv2 from "./Recoildiv2"
export default function Recoildiv1() {
    const [n, setN] = useState(0)
    const [n2, setN2] = useState()
    useEffect(()=>{
        setN2(n*2)
    },[n])
  return (
    <div>
        Recoildiv1 : n = {n}, n2={n2}
        <Recoildiv2 num = {n} setN={setN} num2 = {n2}/>
    </div>
    
  )
}


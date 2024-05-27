import { AtomN, AtomN2 } from "./AtomN";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Recoildiv2 from "./Recoildiv2"
export default function Recoildiv1() {
    const [n, setN] = useRecoilState(AtomN)
    const n2 = useRecoilValue(AtomN2)
    useEffect(()=>{
        if (!localStorage.getItem('n')) return;
        setN(parseInt(localStorage.getItem("n")))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>
        Recoildiv1 : n ={n}, n2={n2}
        <Recoildiv2/>
    </div>
    
  )
}


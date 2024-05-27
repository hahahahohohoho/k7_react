import Recoildiv3 from "./Recoildiv3";

export default function Recoildiv2({num, setN, num2}) {
  return (
    <div>
        Recoildiv2 : n2 = {num2}
        <Recoildiv3 num = {num} setN={setN} num2={num2}/>
    </div>
  )
}


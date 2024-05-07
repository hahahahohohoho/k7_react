import Mydiv3 from "./Mydiv3";

export default function MyDiv2({dn1, dn2, dn3}) {
  return (
    <div  className="flex flex-col p-2 m-2 w-2/3 h-2/3  justify-center items-center bg-red-200 w-full text-cyan-300 text-3xl">
      <div className="w-full">{`${dn1}>${dn2}`}</div>      
      <Mydiv3 dn1 = {dn1} dn2={dn2} dn3 = {dn3}/>
    </div>
  )
}

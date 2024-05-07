import Mydiv3 from "./Mydiv3";

export default function MyDiv2(probs) {
  return (
    <div  className="flex flex-col p-2 m-2 w-2/3 h-2/3  justify-center items-center bg-red-200 w-full text-cyan-300 text-3xl">
      <div className="w-full">{`${probs.dn1}>${probs.dn2}`}</div>      
      <Mydiv3 dn1 = {probs.dn1} dn2={probs.dn2} dn3 = {probs.dn3}/>
    </div>
  )
}

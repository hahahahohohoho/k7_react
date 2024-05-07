import MyDiv2 from "./MyDiv2";

export default function MyDiv() {
  const dname1 = 'div1'
  const dname2 = 'div2'
  const dname3 = 'div3'

  return (
    <div className="flex flex-col p-2 m-2 w-2/3 h-2/3 justify-center items-center bg-red-500 w-full text-cyan-300 text-3xl">
      <div className="w-full ">{dname1}</div>
      <MyDiv2 dn1 = {dname1} dn2={dname2} dn3 = {dname3}/>
    </div>
  )
}

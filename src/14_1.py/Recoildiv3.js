import ButtonC from '../UI/ButtonC'
export default function Recoildiv3({num, setN, num2}) {
    const handleUp = ()=>{
        setN(num+1)
    }
    const handleDown = ()=>{
        setN(num-1)
    }
  return (
    <div>
      Recoildiv3 : n = {num}
      <div>
        <ButtonC caption='증가'
                bcolor='blue'
                handleClick={handleUp}/>
        <ButtonC caption='감소'
                bcolor='blue'
                handleClick={handleDown}/>
      </div>
    </div>
  )
}

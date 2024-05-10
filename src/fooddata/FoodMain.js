import fdt from './fooddata.json'
import Button from '../UI/ButtonC'
import FoodCard from './FoodCard';
import { useState } from 'react';

export default function FoodMain() {
  const [odvList, setOdvList] = useState([]);
  let odv = fdt.map(item=>item['운영주체 분류']);
  odv = [...new Set(odv)];
  let tm =[]
  const handleC1 = (c)=>{
    tm = fdt.filter(item=> item['운영주체 분류'] === c).map(item => <FoodCard key={item.사업장명} data={item}/> )
    setOdvList(tm)
  }
  const c1bts = odv.map(item => <Button key={item} caption={item} bcolor={'blue'} handleClick={()=>handleC1(item)}/>)
  // let odvList = fdt.map(item=> <FoodCard key={item.사업장명} data={item}/>);


  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className='w-full flex justify-around items-center mt-5'>
        {c1bts}  
      </div>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap4'>
        {odvList}
      </div>
    </div>
  )
}

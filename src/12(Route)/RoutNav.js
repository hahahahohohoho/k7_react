import ButtonC from '../UI/ButtonC'
import { useNavigate } from 'react-router-dom' // page의 경로를 navigating 해주는 리액트라우터돔의 컴포넌트

export default function RoutNav() {
    const navigate = useNavigate()
    return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center mt-5'>
        <ButtonC caption='Home' bcolor='blue' handleClick={()=>{navigate('/')}}/>
        <ButtonC caption='Page1' bcolor='blue' handleClick={()=>{navigate('/p1')}}/>
        <ButtonC caption='Page2' bcolor='blue' handleClick={()=>{navigate('/p2')}}/>
    </div>
  )
}

import './style.css'
import stlyes from './My.module.css'
import {useState} from "react"; 

function MyClockTime(){
    const [time, setTime] = useState();
    const now = new Date();
    setTime(now.toLocaleDateString());
    // const gubun = nowStr.substring(0,2);
    // const st = {color : "yellow", fontWeight : "bold"}
    return(
        <>
            {/* {(gubun == '오전') ? <h2 className='div1'>현재 시간: {nowStr}</h2>
            : <h2 className='div2'>현재 시간: {nowStr}</h2>} */}
            <h2 className={stlyes.c1}>현재 시간: {time}</h2>
        </>
    );
}
export default MyClockTime;

// return 안에는 if문 불가능! -> 삼항연산자 활용
// state 활용하여 업데이트 가능(추후)
// 일반 css를 import하면 전체에 적용
// 컴포넌트만 적용하려면 모듈(파일명.module.css)
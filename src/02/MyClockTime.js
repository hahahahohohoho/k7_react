import './style.css'
import stlyes from './My.module.css'

function MyClockTime(){
    const now = new Date();
    const nowStr = now.toLocaleDateString();
    // const gubun = nowStr.substring(0,2);
    // const st = {color : "yellow", fontWeight : "bold"}
    return(
        <>
            {/* {(gubun == '오전') ? <h2 className='div1'>현재 시간: {nowStr}</h2>
            : <h2 className='div2'>현재 시간: {nowStr}</h2>} */}
            <h2 className={stlyes.c1}
            // className={gubun === '오전'? "div1":"div2"}
            >현재 시간: {nowStr}</h2>
        </>
    );
}
export default MyClockTime;

// return 안에는 if문 불가능! -> 삼항연산자 활용
// state 활용하여 업데이트 가능(추후)
// 일반 css를 import하면 전체에 적용
// 컴포넌트만 적용하려면 모듈(파일명.module.css)
import { useEffect, useState } from "react"
import ButtonC from '../UI/ButtonC'

export default function TrafficMain() {
    /*
    useState 변수를 관리하는 훅
    선언시 const[변수명, set변수명] = useState(초기값)
    변수를 설정하려면 오직 ^setter로만 가능!
    */
    const [tdata, setTdata] = useState([]); //[]는 tdata의 초기값을 배열로
    const [c1, setC1] = useState();         //대분류
    const [c1Tag, setC1Tag] = useState();   //대분류 버튼
    const [c1Sel, setC1Sel] = useState();   //선택된 대분류

    const [c2, setC2] = useState();         //중분류 
    const [c2Tag, setC2Tag] = useState();   //중분류 버튼
    const [c2Sel, setC2Sel] = useState();   //선택된 중분류

    const [info, setInfo] = useState();    //선택된 상세자료


    //대분류를 선택할 때
    const handleC1Select = (item) => {
        setC1Sel(item)
    }

    //중분류를 선택할 때
    const handleC2Select = (item) => {
        setC2Sel(item)
    }

    //fetch 함수로 데이터 가져오기
    const getFectchData = (url) => {
        fetch(url) //js에서 기본적으로 제공하는 data 땡겨오기 함수
            .then(resp => resp.json()) //첫 .then은 data가 도착하면 resp(받아온 가공되지 않은 데이터)을 .json파일로 변경
            .then(data => setTdata(data.data))
            .catch(err => console.log(err));
    }
    /*
    useEffect()
    콜(호출)하지 않아도 자동으로 실행되는 함수
    useEffect 안에 들어가는 인수로 콜백함수만이면 화면 변경시 무조건 : useEffect(()=>{})
    useEffect 안에 들어가는 인수로 []가 있으면 컴포넌트 첫 실행시 한번 : useEffect(()=>{}, [])
    useEffect 안에 들어가는 인수로 [변수] 특정변수가 바뀌면 실행 : useEffect(()=>{}, [state])
    */
    //컴포넌트 생성 시 한번 실행
    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?page=1&perPage=17&'
        url = `${url}serviceKey=${process.env.REACT_APP_KEY}`
        getFectchData(url)
    }, []);

    // tdata가 변경되면 실행
    useEffect(() => {
        if (tdata.length === 0) return;
        let tm = tdata.map(item => item['사고유형_대분류'])
        tm = [...new Set(tm)]

        setC1(tm)
    }, [tdata])

    // 대분류 생성 후
    useEffect(() => {
        if (!c1) return;
        let tm = c1.map((item) => <ButtonC caption={item}
            key={item}
            bcolor='blue'
            handleClick={() => handleC1Select(item)} />)
        setC1Tag(tm);
    }, [c1]);

    //대분류 선택 -> 중분류 생성
    useEffect(() => {
        let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel).map(item => item['사고유형_중분류'])
        setC2(tm)
    }, [c1Sel])

    //중분류 만들어졌을 때
    useEffect(() => {
        if (!c2) return;
        let tm = c2.map((item) => <ButtonC caption={item}
            key={item}
            bcolor='blue'
            handleClick={() => handleC2Select(item)} />)
        setC2Tag(tm);
    }, [c2])

    //중분류 선택 => 상세정보
    useEffect(() => {
        console.log("대분류선택 : ", c1Sel)
        console.log("중분류선택 : ", c2Sel)
        let tm = tdata.filter(item => item['사고유형_대분류'] === c1Sel &&
            item['사고유형_중분류'] === c2Sel)
        tm = tm[0];
        console.log('상세', tm)
        setInfo(tm['사고건수'])
    }, [c2Sel])

    return (
        <div className="w-10/12 h-full flex flex-col  justify-start items-start">
            <div className="w-full flex justify-between items-center my-10 ">
                <div className="w-1/4 justify-start items-center">
                    교통사고 대분류
                </div>
                <div className="w-3/4 flex">
                    {c1Tag}
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-10 ">
                <div className="w-1/4 justify-start items-center">
                    교통사고 중분류
                </div>
                <div className="w-3/4 flex">
                    {c2Tag}
                </div>
            </div>
            <div className="w-full flex justify-between items-center my-10 ">
            사고건수 : {parseInt(info).toLocaleString()}
            </div>
        </div>
    )
}

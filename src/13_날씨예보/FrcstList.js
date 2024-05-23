import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import getcode from './getxy/getcode.json';
import SelectC from "../UI/SelectC";

export default function Frcst() {
    //state 변수
    //data
    const [tdata, setTdata] = useState();       //예보 정보
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTdata(data.response.body.items.item);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    
    const [ops, setOps] = useState(); //select options
    const [selItem, setSelItem] = useState();
    const [tags, setTags] = useState();

    const selRef = useRef()
    const [sParams] = useSearchParams() // params
    const gubun = sParams.get('gubun')
    const x = sParams.get('x')
    const y = sParams.get('y')
    const area = sParams.get('area')
    const dt = sParams.get('dt')
    const selOp = () => {
        let tm = getcode.filter(item => (gubun === '단기' ? item['예보구분'] === '단기예보' : item['예보구분'] === '초단기예보') &&
            item['항목명'] === selRef.current.value)
        setSelItem(tm[0])
    }
    const sky_dic = {
        '1': '맑음', '3': '구름많음', '4': '흐림'
    }
    const pty_dic = {
        '0': '없음', '1': '비', '2': '비/눈', '3': '눈', '4': '소나기', '5': '빗방울', '6': '빗방울눈날림', '7': '눈날림'
    }
    
    useEffect(() => {
        let tm = tdata && tdata.filter(item => selItem['항목값'] === item.category)
            .map(item =>
                <tr key={`${item.fcstDate}-${item.fcstTime}-${item.category}`} className="border-b border-neutral-200 hover:bg-neutral-100">
                    <td className="whitespace-nowrap px-6 py-2 text-center">{selItem['항목명']}({item.category})</td>
                    <td className="whitespace-nowrap px-6 py-2 text-center">{`${item.fcstDate.substring(0, 4)}-${item.fcstDate.substring(4, 6)}-${item.fcstDate.substring(6, 8)}`}</td>
                    <td className="whitespace-nowrap px-6 py-2 text-center">{item.fcstTime}</td>
                    <td className="whitespace-nowrap px-6 py-2 text-center">
                        {item.category === 'SKY' ? sky_dic[item.fcstValue] 
                        : item.category === 'PTY' ? pty_dic[item.fcstValue] 
                        : `${item.fcstValue}${selItem['단위']}`}
                        
                    </td>
                </tr>
            )
        setTags(tm)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selItem])

    useEffect(() => {
        let tm = getcode.filter(item => gubun === '단기'
            ? item["예보구분"] === "단기예보"
            : item["예보구분"] === "초단기예보")
            .map(item => item["항목명"])
        setOps(tm);

        let url;
        if (gubun === '초단기') {
            url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
            url = url + `serviceKey=${process.env.REACT_APP_KEY}&numOfRows=900&pageNo=1`;
            url = url + `&dataType=JSON&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}`;
        }
        else {
            url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
            url = url + `serviceKey=${process.env.REACT_APP_KEY}&numOfRows=900&pageNo=1`;
            url = url + `&dataType=JSON&&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`;
        }
        console.log(url)
        getFetchData(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div className="w-1/2 flex justify-between items-center my-5 ">
                <Link to='/frcst' className="text-lg font-bold">날씨예보 홈</Link>
                <span className="text-xl font-bold">{gubun}예보</span> <span className="text-emerald-800 text-2xl font-bold">{area} </span>
                {ops && <SelectC id='sel' initMsg='항목을 선택하세요' ops={ops} selRef={selRef} handleChange={() => selOp()} />}
            </div>
            <div className="w-2/3">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center text-lg">항목명</th>
                            <th scope="col" className="px-6 py-3 text-center text-lg">예측일자</th>
                            <th scope="col" className="px-6 py-3 text-center text-lg">예측시간</th>
                            <th scope="col" className="px-6 py-3 text-center text-lg">예보 값</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tags}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

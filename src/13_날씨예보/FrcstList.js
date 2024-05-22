import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import getcode from './getxy/getcode.json';
import SelectC from "../UI/SelectC";



export default function Frcst() {
//state 변수
    //data
    const [gdata, setGdata] = useState([]);
    const getFectchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setGdata(data.response.body.items.item);
            })
            .catch(error => console.error('Error fetching data:', error));
    };
    //select options
    const [ops, setOps] = useState();

    const selRef = useRef()
    const [sParams] = useSearchParams() // params
        const gubun = sParams.get('gubun')
        const x = sParams.get('x')
        const y = sParams.get('y')
        const area = sParams.get('area')
        const date = sParams.get('dt').replaceAll('-','')
    const selOp = ()=>{
        let tm = gdata.filter(item=>item.category == getcode.filter(item=>item.항목명 == selRef).map(item=>item.항목값))
        console.log(tm)
    }
    useEffect(() => {
        let tm = getcode.filter(item => gubun ==='단기'? item['예보구분']==='단기예보': item['예보구분'==='초단기예보']).map(item=>item.항목명);
        setOps(tm)

        let url = ''
        gubun ==='단기' ?
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${process.env.REACT_APP_KEY}&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=0630&nx=${x}&ny=${y}` :
        url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.REACT_APP_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${date}&base_time=0500&nx=${x}&ny=${y}`       
        getFectchData(url);
    }, []);
    

    const tags = gdata.length > 0 && gdata.map((item) => {
        
        return (
            <tr key={`${item.fcstDate}-${item.fcstTime}`} className="border-b border-neutral-200 hover:bg-neutral-100">        
                <td className="whitespace-nowrap px-6 py-2 text-center">{item.fcstDate}</td>
                <td className="whitespace-nowrap px-6 py-2 text-center">{item.fcstTime}</td>
                <td className="whitespace-nowrap px-6 py-2 text-center">{item.fcstValue}</td>
            </tr>
        );
    });

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-1/2 flex justify-between items-center my-3">
                <Link to='/frcst'>단기예보 홈</Link>
                <span className="text-xl font-bold">{gubun}예보</span> <span className="text-emerald-800 text-xl font-bold">{area} </span>
                <SelectC initMsg='항목을 선택하세요' ops={ops} selRef={selRef} handleChange ={selOp}/>
            </div>
            <div className="w-2/3">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">예측일자</th>
                            <th scope="col" className="px-6 py-3 text-center">예측시간</th>
                            <th scope="col" className="px-6 py-3 text-center">예보 값</th>
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

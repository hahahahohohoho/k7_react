import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";

import { useState, useEffect, useRef } from "react";

export default function BoxOffice() {
  const [dailyList , setDailyList] = useState([]);
  const [selMv, setSelMv] = useState();
  const selDate = useRef()

  //데이터 가져오기
  const getFetchData = (url) =>{
    fetch(url)
      .then(resp =>resp.json())
      .then(data => setDailyList(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
  }
  //날짜가 선택되었을때
  const handleSelect = (e)=>{
    e.preventDefault()

    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
    url = url + `key=${process.env.REACT_APP_MV_KEY}`
    url = url + `&targetDt=${selDate.current.value.replaceAll('-','')}`
    getFetchData(url)
  }


  useEffect(() => {
    setSelMv(dailyList[0]);
  }, [dailyList]);
    
 
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-start items-center mt-10">
        <form className='w-11/12'>
          <div className="flex , mb-5 justify-end items-center">
            <label htmlFor='dateId'>날짜선택</label>
            <input type="date"
            className="ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 "
            id='date' ref={selDate} onChange={handleSelect}/>
          </div>
        </form>
        <table
          className="w-11/12 text-left text-sm font-light text-surface">
          <BoxOfficeThead />
          <BoxOfficeTbody dailyList = {dailyList} setSelMv = {setDailyList}/>
        </table>
        {selMv!=null && <BoxOfficeInfo selMv ={selMv} />}
      </div>
    </div>
  )
}

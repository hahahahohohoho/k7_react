import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import { useState } from 'react'


export default function FoodCard({data}) {
  const [isShow, setIsShow] = useState(false);
  const hadleShow = () => {
    setIsShow(!isShow);
  }
  // const data = {
  //   "구분": "광역지원센터",
  //   "시군구": "부산시",
  //   "사업장명": "부산광역푸드뱅크",
  //   "신고기준": "당연",
  //   "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
  //   "연락처(대표번호)": "051-791-1377",
  //   "팩스번호": "051-714-3096",
  //   "운영주체 분류": "1. 사회복지법인",
  //   "운영주체명": "부산광역시사회복지협의회"
  // }
  return (
    <div className="w-full h-40 flex justify-center items-center m-2">
      <div className='w-1/3 mx-1'>
        <img src={data['구분'] === '광역지원센터' ? busan :
                  data['구분'] === '기초푸드뱅크' ? bank : market} alt = 'img'/>
      </div>
      <div className="w-2/3 h-full flex flex-col items-start justify-around">
        <p className='text-2xl font-bold'>
          {data.사업장명}
        </p>
        <p className='text-lg'>
          {data.운영주체명}
        </p>
        <p className='text-sm text-gray-600'>
          {data['사업장 소재지']}
        </p>
        <div className='w-full h-6 bg-slate-800 flex items-center' onClick={hadleShow}>
          {isShow && <p className='text-white'>{data['연락처(대표번호)']}</p>}
        </div>
      </div>
    </div>
  )
}

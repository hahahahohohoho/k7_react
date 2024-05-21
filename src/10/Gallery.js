import ButtonC from "../UI/ButtonC";
import GalleryCard from "./GalleryCard";
import { useState, useEffect, useRef} from "react";

export default function Gallery() {
  const [gdata, setGdata] = useState();
  const [cards, setCards] = useState();
  const inputRef = useRef()
  // const imgUrl = "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"
  // const title = '태종대유원지'
  // const content = '부산광역시 영도구 동삼동'
  // const spTag = '태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교'
  const getFectchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setGdata(data.response.body.items.item)
      })
  }
  const handleOK = () =>{
    if (inputRef.current.value === '') {
      inputRef.current.focus()
      alert('키워드를 입력하세요.')
      return
    }
    let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey='
    url = url + `${process.env.REACT_APP_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURI(inputRef.current.value)}&_type=json`
    getFectchData(url)
  }
  const handleClear = ()=>{
    inputRef.current.value = ''
    setCards('')
    setGdata('')
    inputRef.current.focus()
  }
  //컴포넌트 생성시
  useEffect(() => {
    let url = ''
    getFectchData(url)
  }, [])
  //gdata가 만들어질때
  useEffect(() => {
    if (!gdata) return;
    let tm = gdata.map(item =>
      <GalleryCard imgUrl={item.galWebImageUrl} title={item.galTitle} content={item.galPhotographyLocation} spTag={item.galSearchKeyword} key={item.galContentId} />
    );
    setCards(tm)
  }, [gdata])

  return (
    <div className="w-full h-full flex flex-col justify-start items-start mt-0">
      <div className="w-full flex justify-center items-center mt-10">
        <input id='inputID' ref={inputRef} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 mx-5"></input>
        <ButtonC caption={'확인'} bcolor={'blue'} handleClick={() => handleOK()}/>
        <ButtonC caption={'취소'} bcolor={'blue'} handleClick={() => handleClear()}/>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center mt-5">
        {/* <GalleryCard imgUrl={imgUrl}title={title} content={content} spTag={spTag}/> */}
        {gdata && cards}
      </div>
    </div>

  )
}

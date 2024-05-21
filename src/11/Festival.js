import { useState, useEffect, useRef } from "react";
import GalleryCard from "../10/GalleryCard";
import SelectC from "../UI/SelectC";
export default function Festival() {
    const [gdata, setGdata] = useState();
    const [cards, setCards] = useState();
    const [ops, setOps] = useState();
    const selRef = useRef()
    //구 선택시 변경시키기
    const handleUpdate = (e) => {
        // e.preventDefault()
        let tm = gdata.filter(item => item.GUGUN_NM === selRef.current.value)
        .map(item =>
            <GalleryCard imgUrl={item.MAIN_IMG_NORMAL} title={item.TITLE} content={item.TRFC_INFO} spTag={item.MIDDLE_SIZE_RM1} key={item.UC_SEQ} />
        );
        
        setCards(tm)
    }

    const getFectchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setGdata(data.getFestivalKr.item)
            })
    }
    //컴포넌트 생성 시
    useEffect(() => {
        let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_KEY}&pageNo=1&numOfRows=37&resultType=json`
        getFectchData(url)
    }, [])
    //gdata 업데이트 시
    useEffect(() => {
        if (!gdata) return
        console.log(gdata)
        let tm1 = gdata.map(item => item.GUGUN_NM)
        tm1 = [...new Set(tm1)].sort()
        setOps(tm1)
    }, [gdata])

    return (
        <div className="w-full h-full">
            <form class="max-w-sm mx-auto mt-10 h-30 ">
                <SelectC id='op' ops={ops} selRef={selRef} initMsg='부산 지역 구 선택' handleChange={() => handleUpdate()} />
            </form>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center mt-5">
                {gdata && cards}
            </div>

        </div>
    )
}

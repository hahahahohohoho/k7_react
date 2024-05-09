export default function BoxOfficeInfo({ selMv }) {
  return (
    <div className="w-9/12 h-20 text-sm flex justify-center items-center mt-10 bg-slate-600 text-white rounded-md">
      <div className="mx-3">
        전일 대비 매출액 변화 : {parseInt(selMv.salesInten).toLocaleString()}원 ({selMv.salesChange}%)
      </div>
      <div className="mx-3">
        해당일 관람객 : {parseInt(selMv.audiCnt).toLocaleString()}명
      </div>
      <div className="mx-3">
        전일 대비 관람객변화 : {parseInt(selMv.audiInten).toLocaleString()}명({selMv.audiChange}%)
      </div>
    </div>
  )
}

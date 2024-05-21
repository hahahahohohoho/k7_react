import { useSearchParams, useLocation } from "react-router-dom";
export default function RoutPage2() {
  const fastfood = ['🍔','🍕']
  //useLocation 활용해서 item의 이름 경로등을 구할 수 있음 참고
  const loc = useLocation()
  console.log(loc.pathname, loc.search)

  const [sParams] = useSearchParams()
  console.log("sParams =",sParams)
  // const item = sParams.get('item')
  let tm = []
  sParams.forEach(item => fastfood.includes(item)? tm.push(`${item} : 맛있다`) : tm.push(`${item} : 맛없다`)
  )

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1>
        RoutPage2
      </h1>
      <div className="w-1/2 grid grid-cols-2 m-10">
        {/* {fastfood.includes(item)? `${item} : 맛있습니다.` : `${item} : 맛없습니다.` } */}
        {tm.join(',')}
      </div>
    </div>
  )
}

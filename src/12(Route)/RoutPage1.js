import { useParams } from "react-router-dom"
export default function RoutPage1() {
  const item = useParams().item;
  const fastfood = ['🍔','🍕']
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1>
        RoutPage1
      </h1>
      <div className="w-1/2 grid grid-cols-2 m-10">
        {fastfood.includes(item)? `${item} : 맛있습니다.` : `${item} : 맛없습니다.` }
      </div>
    </div>
  )
}

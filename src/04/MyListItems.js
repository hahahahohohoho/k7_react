import { useState } from "react"; 

export default function MyListItems({title, imgUrl, content}) {
  const [n, setN] = useState(0);
  const handleCount = () =>{
    setN(n+1);
  }

  return (
    <div className="flex w-full justify-center bg-slate-100">
      <div className="flex justify-center items-center w-1/3">
        <img src={imgUrl} alt = {imgUrl}/>
      </div>
      <div className="flex flex-col w-2/3 p-2">
        <div className="text-3xl bold h-1/5">{title}</div>
        <div className="py-1.5 text-l h-3/5">
            {content}
        </div>
        <div className="py-1.5 mb-0 h-1/5 flex justify-end">
            <span className="px-0.5" onClick={handleCount}>❤</span>
            <span className="px-0.5">Like</span>
            <span className="px-0.5">{n}</span>
        </div>
      </div>
    </div>
  )
}

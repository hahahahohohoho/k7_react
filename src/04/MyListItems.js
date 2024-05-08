import { useState, useEffect } from "react"; 

export default function MyListItems({title, imgUrl, content}) {
  const [n, setN] = useState(0);
  const handleCount = () =>{
    setN(n+1);
  }
  // 생성할때 실행
  useEffect(()=>{
    console.log(title, "생성")
  }, []);
  //state 변수가 변경되면 실행
  useEffect(()=>{
    console.log(title, '변경 n=', n)
  }, [n])
  //컴포넌트가 변경되면 항상 실행
  useEffect(()=>{
    console.log(title,'변경됨')
  })

  return (
    <div className="flex w-full justify-center bg-slate-300">
      <div className="flex justify-center items-center w-1/3">
        <img src={imgUrl} alt = {title}/>
      </div>
      <div className="flex flex-col w-2/3 p-2">
        <div className="text-3xl bold h-1/5 font-bold">{title}</div>
        <div className="py-1.5 text-l h-3/5">
            {content}
        </div>
        <div className="py-1.5 mb-0 h-1/5 flex justify-end">
            <span onClick={handleCount}>❤</span>
            <span className="px-2 font-bold" onClick={handleCount}>Like</span>
            <span>{n}</span>
        </div>
      </div>
    </div>
  )
}

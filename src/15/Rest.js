import { useEffect, useState } from "react"

export default function Rest() {
    const[tdata, setTdata] = useState()
    const[tags, setTags] = useState()
    useEffect(()=>{
        let url = 'http://localhost:3005/posts'
        getFetch(url)
    },[])
    useEffect(()=>{
        console.log(tdata)
        if(!tdata) return // 에러가 나면 항상 데이터가 없을 때 리턴하는 문장을 떠올려라
        let tm = tdata.map(item => <li key={item.key}>{item.author} : {item.title}</li>)
        setTags(tm)
    },[tdata])
    const getFetch = async (url)=>{
        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data)
    } // async await 문은 .then과 동일
  return (
    <div>
      Rest
      {tags}
    </div>
  )
}


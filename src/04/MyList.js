import MyListData from "./MyListData.json";
import MyListItems from "./MyListItems";

export default function MyList() {
  const tags = MyListData.map(item =>
                                <MyListItems key = {item.title}  // 동적으로 만들 때 반드시 키값을 줘야한다. 안주면 콘솔창에 에러남!
                                            title = {item.title}
                                            imgUrl = {item.imgUrl}
                                            content = {item.content}/>)
  return (
    <div className="w-full grid grid-cols-2 gap-4">
        {tags}
    </div>
  )
}

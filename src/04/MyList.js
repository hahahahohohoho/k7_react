import MyListData from "./MyListData.json";
import MyListItems from "./MyListItems";

export default function MyList() {
  const tags = MyListData.map(item =>
                                <MyListItems title = {item.title}
                                            imgUrl = {item.imgUrl}
                                            content = {item.content}/>)
  return (
    <div className="w-full grid grid-cols-2 gap-4">
        {tags}
    </div>
  )
}

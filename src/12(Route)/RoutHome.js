import { Link } from "react-router-dom"

export default function RoutHome() {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center mt-5">
      <h1 className="text-2xl font-bold flex justify-center items-center">
        RouteHome
      </h1>
      <div className="w-f grid grid-cols-2 m-10">
        <div className=" w-full flex flex-col justify-center items-center text-xl m-5 p-5">
            <h2 className="text-xl font-bold flex justify-center items-center">Page1</h2>
            <ul>
                <li><Link to='/p1/🍕'>피자 🍕</Link></li>
                <li><Link to='/p1/🍔'>햄버거 🍔</Link></li>
                <li><Link to='/p1/🥗'>샐러드 🥗</Link></li>
            </ul>
        </div>
        <div className=" w-full flex flex-col justify-center items-center text-xl m-5 p-5">
             <h2 className="text-xl font-bold flex justify-center items-center">Page2</h2>
            <ul>
                {/* <li><Link to='/p2?item=🍕'>피자 🍕</Link></li>
                <li><Link to='/p2?item=🍔'>햄버거 🍔</Link></li>
                <li><Link to='/p1/?item=🥗'>샐러드 🥗</Link></li> */}
                <li><Link to='p2?item1=🍕&item2=🍔&item3=🥗'>피자 🍕, 햄버거🍔,샐러드 🥗</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

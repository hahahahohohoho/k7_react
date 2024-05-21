import { BrowserRouter, Routes, Route } from "react-router-dom"
import RoutHome from "./RoutHome"
import RoutPage1 from "./RoutPage1"
import RoutPage2 from "./RoutPage2"
import RoutNav from "./RoutNav"
export default function RoutMain() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center text-xl font-bold">
            {/* 경로를 설정하는 것. 주 페이지뒤에 path를 붙여서 주소를 만듦 */}
            <BrowserRouter>
                <RoutNav/>
                <Routes> 
                    <Route path="/" element={<RoutHome/>}/>
                    <Route path="/p1/:item" element={<RoutPage1/>}/>
                    <Route path="/p2" element={<RoutPage2/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

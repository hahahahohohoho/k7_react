import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
// import logo from './logo.svg'
import Lotto from './05/Lotto';
import MyClock from './02/MyClock';
import BoxOffice from './06/BoxOffice';
import Festival from './11/Festival';
import Gallery from './10/Gallery';
import FoodMain from './fooddata/FoodMain';
import Frcst from "./13_날씨예보/Frcst";
import FrcstList from "./13_날씨예보/FrcstList";
import './App.css';
import { GoHome } from "react-icons/go";
// import TrafficMain from './08/TrafficMain';
// import MyDiv from './03 copy/MyDiv';
// import MyList from './04/MyList';
// import RoutMain from './12(Route)/RoutMain';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto max-w-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-300'>
          <div>리액트연습</div>
          <ul className="flex items-center">
            <li><Link to='/clock' className="mx-3">시계</Link></li>
            <li><Link to='/lot' className="mx-3">로또</Link></li>
            <li><Link to='/food' className="mx-3">푸드뱅크</Link></li>
            <li><Link to='/box' className="mx-3">박스오피스</Link></li>
            <li><Link to='/fest' className="mx-3">축제</Link></li>
            <li><Link to='/gal' className="mx-3">관광사진</Link></li>
            <li><Link to='/frcst' className="mx-3">날씨예보</Link></li>

          </ul>
          <div><GoHome className='text-3xl' /></div>

        </header>
        <main className='grow flex justify-center items-center'>
          <Routes>
            <Route path="/box" element={<BoxOffice />} />
            <Route path="/lot" element={<Lotto />} />
            <Route path="/clock" element={<MyClock />} />
            <Route path="/fest" element={<Festival />} />
            <Route path="/gal" element={<Gallery />} />
            <Route path="/food" element={<FoodMain />} />
            <Route path="/frcst" element={<Frcst />} />
            <Route path="/frclst" element={<FrcstList />} />
          </Routes>

          {/* <div className='flex justify-center items-center'>
            <img src={logo} className='App-logo' alt="logo"/>
          </div> */}
          {/* <MyDiv/> */}
          {/* <MyList/> */}
          {/* <Lotto/> */}
          {/* <BoxOffice/> */}
          {/* <MyClock/> */}
          {/* <FoodMain/> */}
          {/* <TrafficMain/> */}
          {/* <Gallery/> */}
          {/* <RoutMain/> */}
          {/* <Festival/> */}
        </main>
        <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
          @2024 Kim seon sin. All Right reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* 
1. js파일(컴포넌트) 이름은 대문자로 시작, retrun값이 있어야함
2. class를 가지고 오고 싶을 때는 className을(jsx문법을 따름)
3. import하면 export도 있어야함.
4. 내가 만든 태그(컴포넌트)는 재사용 가능 import되어 있다면!
*/
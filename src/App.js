// import logo from './logo.svg'
// import Lotto from './05/Lotto';
import MyClock from './02/MyClock';
// import BoxOffice from './06/BoxOffice';
import './App.css';
import { GoHome } from "react-icons/go";
// import MyDiv from './03 copy/MyDiv';
// import MyList from './04/MyList';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overflow-y-auto max-w-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-300'>
          <div>리액트연습</div>
          <div><GoHome className='text-3xl'/></div>
        </header>
        <main className='grow flex justify-center items-center'>
          {/* <div className='flex justify-center items-center'>
            <img src={logo} className='App-logo' alt="logo"/>
          </div> */}
          {/* <MyDiv/> */}
          {/* <MyList/> */}
          {/* <Lotto/> */}
          {/* <BoxOffice/> */}
          <MyClock/>
        </main>
        <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
          @2024 Kim seon sin. All Right reserved.
        </footer>
    </div>
  );
}

export default App;

/* 
1. js파일(컴포넌트) 이름은 대문자로 시작, retrun값이 있어야함
2. class를 가지고 오고 싶을 때는 className을(jsx문법을 따름)
3. import하면 export도 있어야함.
4. 내가 만든 태그(컴포넌트)는 재사용 가능 import되어 있다면!
*/
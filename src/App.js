import logo from './logo.svg';
import './App.css';
import Hello from './01/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
      </header>
    </div>
  );
}

export default App;

/* 
1. js파일(컴포넌트) 이름은 대문자로 시작, retrun값이 있어야함
2. class를 가지고 오고 싶을 때는 className을(jsx문법을 따름)
3. import하면 export도 있어야함.
*/
import { Link, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import LocalStoragePage from "./pages/LocalStoragePage";


/**
 * just css style. 
 * you can use any css framework 
 * TODO: delete or comment this style object when use css framework
 */
const style = {
  nav:{
    display:'flex',
    justifyContent:'space-around',
    backgroundColor:'gray',
    padding:'20px 0px',
  },
  a:{
    color:'white',
    fontSize:'large',
    letterSpacing:'0.2rem',
    textDecoration:'none',
  }
}
const App = () => {
  return (
    <>
    <nav style={style.nav}>
      <Link style={style.a} to={'/'}>useCounter</Link>
      <Link style={style.a} to={'/use/ls'}>useLocalStorage</Link>
      <Link style={style.a} to={'/use/uf'}>useFetch</Link>
      <Link style={style.a} to={'/use/el'}>useEventListener</Link>
    </nav>
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/use/ls" element={<LocalStoragePage />} />
      </Routes>
    </>
  );
};

export default App;

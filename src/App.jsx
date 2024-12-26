import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Contact from './Components/Contact/Contact'
import {Routes, Route} from "react-router-dom";
import WcutBag from './Components/WcutBag/WcutBag';
import PwcutBag from './Components/PwcutBag/PwcutBag';
import DcutBag from './Components/DcutBag/DcutBag';
import PDcutBag from './Components/PDcutBag/PDcutBag';
import LoopHandleBag from './Components/LoopHandleBag/LoopHandleBag';
import PLoopCutBag from './Components/PLoopCutBag/PLoopCutBag';
import StichedBag from './Components/StichedBag/StichedBag';
import ReturnGiftBags from './Components/ReturnGiftBags/ReturnGiftBags';
import Products from './Components/Products/Products';
import AboutUs from './Components/AboutUs/AboutUs';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/wCutBag' element={<WcutBag></WcutBag>}></Route>
        <Route path='/pCutBag' element={<PwcutBag></PwcutBag>}></Route>
        <Route path='/dCutBag' element={<DcutBag></DcutBag>}></Route>
        <Route path='/pdcutBag' element={<PDcutBag></PDcutBag>}></Route>
        <Route path='/loopcut' element={<LoopHandleBag></LoopHandleBag>}></Route>
        <Route path='/ploopcut' element={<PLoopCutBag></PLoopCutBag>}></Route>
        <Route path='/stichedBag' element={<StichedBag></StichedBag>}></Route>
        <Route path='/returnBag' element={<ReturnGiftBags></ReturnGiftBags>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App

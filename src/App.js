import './App.css';
import Navigation from './components/Navigation';
import Productlist from './components/Productlist';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { Route, Routes } from "react-router-dom";
import Cart from './components/Cart';
import Footer from './components/Footer';
function App() {
    return (
        <>
            <Navigation/>
            <Productlist/>
                <Routes>
                    <Route path='Signup' Component={Signup}></Route>
                    <Route path='Signin' Component={Signin}></Route>
                    <Route path="/cart" element={Cart } />
                </Routes>
            <Footer/>

        </>
    );
}
export default App;
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Theatre from "./components/Theatre";
import FirstFeed from "./components/FirstFeed";
import SecondFeed from "./components/SecondFeed";
import Footer from "./components/Footer";
import 'aos/dist/aos.css';



const App = () =>{

  const AOS = require('aos');
  useEffect(() => {
    AOS.init({
      delay:300,
      duration:1000,
      once:false,
    });
    AOS.refresh();
  }, []);


  return (
    <>
      <NavBar/>
      <Theatre/>
      <FirstFeed/>
      <SecondFeed/>
      <Footer/>
    </>
  );
}

export default App;

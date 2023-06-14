import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Theatre from "./components/Theatre";
import FirstFeed from "./components/FirstFeed";
import SecondFeed from "./components/SecondFeed";
import Footer from "./components/Footer";


const App = () =>{

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

import React from "react";
import { Route, Routes } from "react-router-dom";
import Asadbek from "./components/Asadbek/Asadbek";
import Asilbek from "./components/Asilbek/Asilbek";
import Javlon from './components/Javlon/Javlon';
import Zuhriddin from './components/Zuhriddin/Zuhriddin';
import Muhammad from './components/Muhammad/Muhammad';
import Login from "./components/Asilbek/Login/Login1";
import Savat from "./components/Asilbek/Savat/Savat";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Asadbek} />
        <Route path="/asilbek" Component={Asilbek} />
        <Route path="/Login" Component={Login} />
        <Route path="/Savat" Component={Savat} />
        <Route path="/javlon" Component={Javlon} />
        <Route path="/zuhriddin" Component={Zuhriddin} />
        <Route path="/muhammad" Component={Muhammad} />
      </Routes>
    </>
  );
}

export default App;

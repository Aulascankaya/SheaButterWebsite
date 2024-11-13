/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { Profil } from "./Components/Profil";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Footer } from "./Components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";




function App() {

  const darkMode = useSelector((state) => state.darkMode);
  const lang = useSelector((state) => state.language);

  // darkMode
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [darkMode]);

  // axios reqres
  useEffect(() => {
    axios.post('https://reqres.in/api/workintech', lang)
    .then(response => {
        console.log('Veri gönderildi:', response.data);
    })
    .catch(error => {
        console.error('Veri gönderilemedi:', error);
    });
  }, []);

  return (
    <div className={darkMode ? 'dark:bg-dark-bg' : 'bg-white'}>
      <ToastContainer />
      <Header  />
      <Intro  />
      <Skills  />
      <Profil  />
      <Projects  />
      <Footer  />
    </div>
  );
}

export default App;

'use client'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import ScrollProgressBar from './components/ScrollProgressBar'

import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleShowMore = () => {
    router.push('/projects');
  };
  const achievements = () => {
    router.push('/achievements');
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true);
    }else{
      setIsDarkMode(false);
    }
  },[]);

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode]);

    return ( 
      <>
      {loading ? (
        <Loader isDarkMode={isDarkMode}/>
      ) : (
        <main>
          <ScrollProgressBar />
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
          <Header isDarkMode={isDarkMode}/>
          <About isDarkMode={isDarkMode}/>
          <Projects isDarkMode={isDarkMode} onShowMore={handleShowMore}/>
          <Achievements isDarkMode={isDarkMode}/> 
          <Contact isDarkMode={isDarkMode}/>
          <Footer isDarkMode={isDarkMode}/>
        </main>
      )}
      </>
    );
}
import React from 'react'
import LightButton from "../assets/website/light-mode-button.png"
import DarkButton from "../assets/website/dark-mode-button.png"
const DarkMode = () => {
    const [theme,setTheme]=React.useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");

    const elemnet = document.documentElement;
    React.useEffect(()=>{
       localStorage.setItem("theme",theme);
       if(theme==="dark"){
        elemnet.classList.add("dark");
           elemnet.classList.add("dark");
         }
            else{
                elemnet.classList.remove("light");
            elemnet.classList.remove("dark");
            }
    },[theme])
  return (
    <div className='relative'>
      <img 
      onClick={()=>setTheme(theme==="dark"?"light":"dark")}
      src={LightButton} alt="lightButton"  className={`w-12 cursor-pointer absolute right-0 z-10 ${theme==='dark'?'opacity-0':"opacity-100"} transition-all duration-200` }/>
      <img 
      onClick={()=>setTheme(theme==="light"?"dark":"light")}
      src={DarkButton} alt="darkButton"  className={`w-12 cursor-pointer  ${theme==='dark'?'opacity-100':"opacity-0"}` }/>
    </div>
  )
}

export default DarkMode

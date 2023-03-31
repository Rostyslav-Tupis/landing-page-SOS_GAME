import React , {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import i18next from 'i18next';
import { useTranslation} from "react-i18next";

import style from './main.module.css';

import Logo from './images/logo.png'
import Navigation from './navigation component/navigation'
import xboxlogo from './images/xbox icon.svg'
import steamlogo from './images/steam icon.svg'
import Title from './title/title'
import Triangle from './images/scroll down.png'

const languages = [
  {
    code:"en",
    name:"ENG",
    country_code:"gb"
  },
  {
    code:"uk",
    name:"UKR",
    country_code:"uk"
  },
]


function Main() {
    const { t  } = useTranslation();

    const [activeBurger , setActiveBurger] = useState(false);
    const [currentLang , setcurrentLang] = useState(localStorage.getItem("i18nextLng"))
    // i18next.changeLanguage(code)
        if (activeBurger) {
          document.body.style.overflow = 'hidden';
        }else{
          document.body.style.overflow = '';
        }

    return(
      <div className={style.container} id="main">
        <div className={style.content} onClick={()=>setActiveBurger(false)}>
          <header>
            <nav className={style.navigation} >
                <div className={style.logotype}>
                  <img alt="logo" src={Logo} className={style.logo}></img>
                </div>
                <Navigation activeBurger={activeBurger}/>
                <div className={style["lang-gameServices"]}>
                  <div className={style["lang"]}>
                    <div className="dropdown">
                      <button className={[`${style["lang-selector-btn"]} btn btn-secondary dropdown-toggle`]} type="button" data-bs-toggle="dropdown" aria-expanded="false" 
                      >
                        {currentLang}
                      </button>
                      <ul className={[`${style["ul-lang"]} dropdown-menu`]}>
                        {languages.map(({code , name , country_code}) =>(
                          <li key={country_code} className={[style["li-item"]]}>
                            <button 
                            // eslint-disable-next-line
                            onClick={() => {return setcurrentLang(name), i18next.changeLanguage(code)}}
                            className={[`${style["li-lang-btn"]} dropdown-item`]}>{name}</button>
                          </li>
                          
                        ))}
                      </ul>
                    </div>
                    <span className={style.divider}></span>
                  </div>
                  <div className={style["platforms"]}>
                    <div className={style["img-container"]}>
                      <a href="https://www.xbox.com/en-US/uk-UA/" target="_blank" rel="noreferrer" className={style["platformLink"]}>
                        <img alt="xbox" className={style["xboxlogo platformlogo"]} src={xboxlogo}></img></a>
                    </div>

                    <div className={style["img-container"]}>
                      <a href="https://store.steampowered.com/app/528970/SOS_Survival/" target="_blank" rel="noreferrer">
                        <img alt="steam" className={style["steamlogo platformlogo"]} src={steamlogo}></img></a>
                    </div>
                  </div>
                </div>
              </nav>
          </header>
              <Title/>

              <div className={style['theStory-container']}>
                <div className={style['theStory']}>
                <Link to="#about" className={style['next-page']}>
                  <div className={style.positioning}>
                    <p>{t ("the_story_btn")}</p>
                    <span><img src={Triangle} alt="icon"/></span>
                  </div>
                </Link>
              </div>
              </div>
            </div>

            {/* ================BURGER MENU================ */}
            <div className={activeBurger ? [style.mobile_btn,style.btn_fixed].join(" ") : style.mobile_btn} 
            onClick={()=>setActiveBurger(!activeBurger)}>

              {activeBurger ?  <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
            </div>
      </div>
    )
}

export default Main
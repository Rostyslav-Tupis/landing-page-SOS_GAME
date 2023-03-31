import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation} from "react-i18next";
import style from './navigation.module.css'

function Navigation({activeBurger}) {
  const { t } = useTranslation();

  return (
    <div className={style["navigation-box"]}>
        <ul className={activeBurger ? [style["unorderedList"],style["active"]].join(" ") : style["unorderedList"]}>

            <li ><Link to="#main" className={style["link-item"]}>{ t ('main')}</Link></li>
            <li ><Link to="#about" className={style["link-item"]}>{ t ('about')}</Link></li> 
            <li ><Link to="#features" className={style["link-item"]}>{ t ('game_features')}</Link></li>
            <li ><Link to="#system_req" className={style["link-item"]}>{ t ('system_req')}</Link></li>
            <li ><Link to="#quotes" className={style["link-item"]}>{ t ('quotes')}</Link></li>

        </ul>
    </div>
  )
}

export default Navigation
import React from 'react'
import { useTranslation} from "react-i18next";

import style from './title.module.css'
import '../.././reusing_css_styles.css'

function Title() {

    const { t, i18n } = useTranslation();
    const ukrlanguage = i18n.language === "uk"

    return (
        <div className={style["title-wrapper"]} >
            <div className={style["titles"]} id="main_title">
                <h1 className={ukrlanguage ? "uk_title" :"title"}>{ t ('title')}</h1>
                <p className="subtitle">{ t ('subtitle')}</p>
            </div>
            <div className={style["btn-box"]}>
                <a href="https://store.steampowered.com/app/528970/SOS_Survival/" target="_blank" rel="noreferrer" 
                className="main_btn"
                >
                    {t ('btn_text')} <span className={style.divider}></span> $14.99
                </a>
            </div>
        </div>
    )
}

export default Title
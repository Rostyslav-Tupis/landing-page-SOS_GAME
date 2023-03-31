import React from 'react'
import { useTranslation} from "react-i18next";
import '../reusing_css_styles.css'

import Slider from './slider'
import style from './about.module.css'

function AboutGame() {
  const { t ,i18n } = useTranslation();

  const ukrlanguage = i18n.language === "uk"

  return (
    <div className={style.cotainer} id="about">
      <div className={style.content}>
        <div className={style.text}>

          <div className={style.text_container}>
            <p className={ukrlanguage ? "uk_subtitle" : "subtitle"}>{ t ('question')}</p>
            <h1 className={ukrlanguage ? "uk_title" : "title"} >{ t ('about_title')}</h1>
          </div>

          <span className={style.divide_line}></span>
          <p className={style.add_info}>
              { t ('extra_info')}
          </p>
          
          {// eslint-disable-next-line 
          <p className={ style['add_info', 'fixing'] }>
              { t ('extra_info2')}
          </p>}
        </div>
        <Slider/>
      </div>
    </div>
  )
}

export default AboutGame
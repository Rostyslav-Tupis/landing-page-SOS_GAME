import React,{useState} from 'react'
import style from './features.module.css'
import '../reusing_css_styles.css'
import { useTranslation} from "react-i18next";


function Features() {
    const { t , i18n} = useTranslation();
    const ukrlanguage = i18n.language === "uk"

    const [isOpen, setIsOpen] = useState(true)
    const [isOpenSecond, setIsOpenSecond] = useState(false)
    const [isOpenThird, setIsOpenThird] = useState(false)

    const openWindow = () =>{
        setIsOpen(true)
        setIsOpenSecond(false)
        setIsOpenThird(false)

        if(isOpen === true){
            setIsOpen(false)
        }
    }

    const openWindow2 = () =>{
        setIsOpenSecond(true)
        setIsOpen(false)
        setIsOpenThird(false)

        if(isOpenSecond === true){
            setIsOpenSecond(false)
        }
    }

    const openWindow3 = () =>{
        setIsOpenThird(true)
        setIsOpen(false)
        setIsOpenSecond(false)

        if(isOpenThird === true){
            setIsOpenThird(false)
        }
    }

    return (
        <div className={style.container}>
            <div className={style.feature_box} id="features">
                

                <div className={style.all_features}>
                    <div className={style.positioning}>
                        <p className={style.question}>{ t ('question_feature')}</p>
                        <h2 className={ukrlanguage ? "uk_title" : "title"}>{ t ('title_feature')}</h2>
                    </div>
                    <div className={style.feature}>
                        <div className={style.current_topic}>
                            <span className={isOpen ? style.circle_active : style.circle}></span>
                            <h3 className={style.subtitle} onClick={openWindow}>{ t ('subtitle_feature_1')}</h3>
                        </div>
                        <p className={isOpen ? [style.extra_info]  : [style.none]}>
                            { t ('extra_info_feature')}
                        </p>
                    </div>

                    <div className={style.feature}>
                    <div className={style.current_topic}>
                        <span className={isOpenSecond ? style.circle_active : style.circle }></span>
                        <h3 className={style.subtitle} onClick={openWindow2} >{ t ('subtitle_feature_2')}</h3>
                    </div>
                        <p className={isOpenSecond ? [style.extra_info]  : [style.none]}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eaque in officia! Nemo, libero temporibus.
                        </p>
                    </div>

                    <div className={style.feature}>
                    <div className={style.current_topic}>
                        <span className={isOpenThird ? style.circle_active : style.circle }></span>
                        <h3 className={style.subtitle} onClick={openWindow3} >{ t ('subtitle_feature_3')}</h3>
                    </div>
                        <p className={isOpenThird ? [style.extra_info]  : [style.none]}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eaque in officia! Nemo, libero temporibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
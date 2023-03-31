import React,{useState} from 'react'
import { useTranslation} from "react-i18next";

import '../reusing_css_styles.css'
import style from './subsc.module.css'
import scullPng from './scull.png'

function Subscribe() {
    const { t } = useTranslation();

    const [userEmail , setUserEmail] = useState('')
    const [isDisabled , setIsDisabled] = useState(true)
    const [emailDirty , setEmailDirty] = useState(false)
    const [errorMessage , setErrorMessage] = useState('')

    const checkEmailValidation = (e) =>{
        setUserEmail(e.target.value)
        // eslint-disable-next-line
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())){
            setIsDisabled(true)
            setErrorMessage('Email is invalid, check if everything is correct')
            
        }else{
            setIsDisabled(false)
            setErrorMessage('')
        }
    }

    const blurHandle = (e) =>{
        switch(e.target.name){
            case "email":
                setEmailDirty(true)
                break

            default:;
        }
        
    }

    return (
        <div className={style.container}>
            <div className='wrapper'>
                <div className={style.content}>
                    <div className={style.img_box}>
                        <img src={scullPng} className={style.scull_img} alt="scull statue"/>
                    </div>
                    <div>
                        <p className='subtitle'>{t ("stay_in_touch")}</p>
                        <h3 className='title'>{t ("newsletter")}</h3>

                        <div className={style.extra_info_container}>
                            <p className='add_info'>
                                {t ("subscribe_extra_info")}
                            </p>
                        </div>

                        <div>
                            <form>
                                <p className={style.input_placeholder}>{t ("email")}</p>
                                <input name="email" className={style.email_input} value={userEmail}
                                onBlur={blurHandle}
                                onChange={(e) => checkEmailValidation(e)}/> 
                                <button 
                                className={isDisabled ? style.subscribe_btn_disabled : style.subscribe_btn} 
                                type="submit" disabled={isDisabled}>{t ("subscribe_btn")}</button>

                                {(emailDirty && errorMessage) && <p className={style.errorMessage}>{errorMessage}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe

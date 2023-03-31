import React from 'react'
import style from './quotes.module.css'
import '../reusing_css_styles.css'
import { useTranslation} from "react-i18next";


import { dataTwitter } from './data'
import twitterPng from './photos/twitter-logo.png'

function Quotes() {
    const { t } = useTranslation();

    return (
        <div className={style.container} id="quotes">
            <div className={style.content}>
                <div className={style.info}>
                    <div className={style.title_position}>
                        <p className='subtitle'>{t ("what_people_think")}</p>
                        <h3 className='title'>{t ("press_quotes")}</h3>
                    </div>
                    
                    <p className="add_info">
                        {t ("quote_extra_text")}
                    </p>
                    <div className={style.button_position}> 
                        <div className="btn_background">
                            <a href="https://twitter.com/playsosgame" className='basic_btn' target="_blank" rel="noreferrer">
                                {t ("more_testimonials")}
                            </a>
                        </div>
                    </div>
                    
                </div>

                <div className={style.all_cards}>
                    {dataTwitter.map((post,id)=>(
                        <div className={style.card} key={id}>
                            <div className={style.top_card}>
                                <div className={style.picture_nickname}>
                                    <div className={style.profile_pic}>
                                        <img src={post.avatart} alt="avatar" className={style.profileImg}/>
                                    </div>
                                    <div className={style.presonal_info}>
                                        <p className={style.nickName}>{post.nickName}</p>
                                        <p className={style.status}>{post.status}</p>
                                    </div>
                                </div>
                                <div className={style.twitter_icon} >
                                    <img src={twitterPng} style={{width:"18px",height:"18px" }} alt="twitter icon"/>
                                </div>
                            </div>
                            <div>
                                <p className={style.post_info}>"{post.info}"</p>
                                <p className={style.date}>{post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Quotes
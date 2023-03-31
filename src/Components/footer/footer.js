import React from 'react'
import  Navigation from '../main section/navigation component/navigation'

import style from './footer.module.css'
import '../reusing_css_styles.css'

import LogoX2 from './footerlogo.png'

function Footer() {
    return (
        <div className={style.container}>
            <div className='wrapper'>
                <footer>
                    <div className={style.content}>
                        <div>
                            <img src={LogoX2} alt="logo" className={style.footer_logo}/>
                        </div>

                        <Navigation/>

                        <div className={style.icons_container}>
                            <ul className={style.icons_list}>
                                <li> 
                                    <a href="https://www.facebook.com/sosgame/" target="_blank" rel="noreferrer">  
                                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={style.facebook_icon} fillRule="evenodd" clipRule="evenodd" d="M6.65382 19.1728H2.56282V9.67884H0.517822V6.40584H2.56282V4.44184C2.56282 1.77284 3.71782 0.183838 6.99582 0.183838H9.72582V3.45684H8.02082C6.74282 3.45684 6.65882 3.91484 6.65882 4.76884L6.65382 6.40584H9.74582L9.38382 9.67884H6.65382V19.1728Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                                <li> 
                                    <a href="https://twitter.com/playsosgame" target="_blank" rel="noreferrer">  
                                        <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={style.twitter_icon} fillRule="evenodd" clipRule="evenodd" d="M21.2138 2.42991C20.4408 2.75191 19.6098 2.96691 18.7388 3.06491C19.6288 2.56491 20.3118 1.77291 20.6338 0.830912C19.7998 1.29291 18.8778 1.62891 17.8958 1.81091C17.1108 1.02491 15.9898 0.534912 14.7508 0.534912C12.3708 0.534912 10.4398 2.34391 10.4398 4.57391C10.4398 4.89091 10.4778 5.19991 10.5518 5.49491C6.96981 5.32591 3.79381 3.71791 1.66781 1.27491C1.29681 1.87191 1.08481 2.56491 1.08481 3.30591C1.08481 4.70591 1.84581 5.94391 3.00181 6.66791C2.29581 6.64591 1.63181 6.46491 1.04981 6.16191C1.04981 6.17991 1.04981 6.19491 1.04981 6.21391C1.04981 8.17091 2.53481 9.80291 4.50681 10.1739C4.14581 10.2659 3.76381 10.3139 3.37181 10.3139C3.09381 10.3139 2.82381 10.2899 2.56081 10.2439C3.10881 11.8469 4.70081 13.0159 6.58681 13.0489C5.11181 14.1319 3.25381 14.7769 1.23381 14.7769C0.885811 14.7769 0.542811 14.7579 0.205811 14.7209C2.11281 15.8659 4.37881 16.5359 6.81281 16.5359C14.7408 16.5359 19.0758 10.3799 19.0758 5.04291C19.0758 4.86691 19.0708 4.69391 19.0628 4.51991C19.9048 3.94991 20.6358 3.23891 21.2138 2.42991Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                                <li> 
                                    <a href="https://www.youtube.com/channel/UCz68gptOfxaYa2rlCIqDs5w" target="_blank" rel="noreferrer">  
                                        <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className={style.youtube_icon} d="M20.61 0.183838H5.98961C3.12627 0.183838 0.799805 2.5511 0.799805 5.46465V12.8975C0.799805 15.8166 3.12627 18.1783 5.98961 18.1783H20.6046C23.4733 18.1783 25.7944 15.8111 25.7944 12.8975V5.46465C25.7998 2.5511 23.4733 0.183838 20.61 0.183838ZM17.0959 9.54803L10.2575 12.8644C10.0731 12.9527 9.86705 12.8203 9.86705 12.6106V5.76814C9.86705 5.55845 10.084 5.42602 10.2629 5.51983L17.1013 9.04589C17.3074 9.15073 17.302 9.4487 17.0959 9.54803Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                                <li> 
                                    <a href="https://www.twitch.tv/directory/game/SOS/videos/all" target="_blank" rel="noreferrer">  
                                        
                                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.79 9.76298V5.58716H12.0878V9.76298H13.79ZM9.53465 9.76298V5.58716H7.83252V9.76298H9.53465Z" fill="white"/>
                                            <path className={style.twitch_icon} fillRule="evenodd" clipRule="evenodd" d="M19.9602 13.6255V9.55405V0.68042H2.93894L0.811279 2.97712V15.087H6.13043V18.8453H8.47085L11.024 16.131H17.407L19.9602 13.6255ZM7.40694 13.4168H4.00268C3.76864 13.4168 3.57715 13.2289 3.57715 12.9992V2.76841C3.57715 2.53874 3.76864 2.35083 4.00268 2.35083H17.6197C17.8537 2.35083 18.0452 2.53874 18.0452 2.76841V10.7025C18.0452 10.8173 18.0027 10.9217 17.9229 11L15.5825 13.2967C15.5027 13.375 15.391 13.4168 15.2793 13.4168H11.3697L8.07183 15.6404C8.00268 15.6874 7.91757 15.7135 7.83247 15.7135C7.76332 15.7135 7.69949 15.6978 7.63566 15.6665C7.49204 15.5934 7.40694 15.4525 7.40694 15.2959V13.4168Z" fill="white"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className={style.divided_line}></div>
                    <div className={style.private_policy}>
                        <p className={style.reserved_policy}> © 2018 Outpost Games, Inc. All Rights Reserved</p>
                        <p className={style.privat_policy}>Privacy Policy | Terms of Services | Code of Conduct </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
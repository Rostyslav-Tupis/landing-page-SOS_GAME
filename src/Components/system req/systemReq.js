import React from 'react'
import { useTranslation} from "react-i18next";

import style from './system.module.css'
import '../reusing_css_styles.css'


function SystemReq() {
    const { t } = useTranslation();

    return (
        <div className={style.container} id="system_req">
            <div className={style.content}>
                <div className={style.uptitle_title}>
                    <p className="subtitle">{t ("run_this_game")}</p>
                    <h3 className="title">{t ("system_requirements")}</h3>
                </div>
                
            <div className={style.positioning}>
                <div className={style.table}>
                        <div className={style.box}>
                            <div className={style.spicialies_os}>
                                <p className={style.system_item_name}>Os:</p>
                                <p className={style.system_item}>Windows 7 64-bit only</p>
                                <p className={style.system_item}>(No OSX support at this time)</p>
                            </div>
                            <div className={style.spicialies}>
                                <p className={style.system_item_name}>Processor:</p>
                                <p className={style.system_item}>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
                            </div>
                        </div>
                        <div className={style.box}>
                            <div className={style.spicialies_memory}>
                                <p className={style.system_item_name}>Memory:</p>
                                <p className={style.system_item}>8 GB RAM</p>
                            </div>
                            <div className={style.spicialies}>
                                <p className={style.system_item_name}>Storage:</p>
                                <p className={style.system_item}>8 GB available space</p>
                            </div>
                        </div>
                        <div className={style.spicialies_graphics}>
                            <p className={style.system_item_name}>Graphics:</p>
                            <p className={style.system_item}>NVIDIA GeForce GTX 660 2GB or </p>
                            <p className={style.system_item}>AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default SystemReq
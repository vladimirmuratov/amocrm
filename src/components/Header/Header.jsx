import style from './header.module.css'
import {Logo} from '../icons/Logo/Logo'
import {FirmName} from '../icons/Logo/FirmName'
import {Telegram} from '../icons/Telegram'
import {Viber} from '../icons/Viber'
import {WhatsApp} from '../icons/WhatsApp'

export const Header = () => {
    return (
        <header className={style.wrapper}>
            <div className={style.logoWrapper}>
                <div className={style.logo}>
                    <Logo/>
                    <FirmName/>
                </div>
                <div className={style.logoSubText}>
                    <p>крупный интегратор CRM <br/>в Росcии и ещё 8 странах</p>
                </div>
            </div>
            <nav className={style.nav}>
                <span>Услуги</span>
                <span>Виджеты</span>
                <span>Интеграции</span>
                <span>Кейсы</span>
                <span>Сертификаты</span>
            </nav>
            <div className={style.contact}>
                <span>+7 555 555-55-55</span>
                <div className={style.messengers}>
                    <Telegram/>
                    <Viber/>
                    <WhatsApp/>
                </div>
            </div>
            <span className={style.redBallOne}></span>
            <span className={style.purpleBallOne}></span>
        </header>
    )
}

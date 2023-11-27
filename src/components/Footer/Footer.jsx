import style from './footer.module.css'
import {Telegram} from '../icons/Telegram'
import {Viber} from '../icons/Viber'
import {WhatsApp} from '../icons/WhatsApp'

export const Footer = () => {
    return (
        <footer>
            <div className={style.wrapper}>
                <div className={style.block}>
                    <h6 className={style.title}>О компании</h6>
                    <p>Партнёрская программа</p>
                    <p>Вакансии</p>
                </div>
                <div className={style.block}>
                    <h6 className={style.title}>Меню</h6>
                    <div className={style.menuBlock}>
                        <div>
                            <p>Расчёт стоимости</p>
                            <p>Услуги</p>
                            <p>Виджеты</p>
                            <p>Интеграции</p>
                            <p>Наши клиенты</p>
                        </div>
                        <div>
                            <p>Кейсы</p>
                            <p>Благодарственные письма</p>
                            <p>Сертификаты</p>
                            <p>Блог на Youtube</p>
                            <p>Вопрос / Ответ</p>
                        </div>
                    </div>
                </div>
                <div className={style.contactBlock}>
                    <h6 className={style.title}>Контакты</h6>
                    <p>+7 555 555-55-55</p>
                    <div className={style.messengersBlock}>
                        <Telegram/>
                        <Viber/>
                        <WhatsApp/>
                    </div>
                    <p style={{fontWeight: 400}}>Москва, Путевой проезд 3с1, к 902</p>
                </div>
            </div>
            <div className={style.copyrightBlock}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <p>Политика конфиденциальности</p>
            </div>
        </footer>
    )
}

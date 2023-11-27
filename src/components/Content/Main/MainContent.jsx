import style from './main.module.css'

export const MainContent = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.blockLeft}>
                <h2 className={style.titleLeft}>Зарабатывайте<br/>больше</h2>
                <span className={style.titleColorLeft}>с WELBEX</span>
                <span className={style.subTextLeft}>Развиваем и контролируем<br/>продажи за вас</span>
            </div>
            <div className={style.blockRight}>
                <h5 className={style.titleRight}>Вместе с <span className={style.titleColorRight}>бесплатной<br/>консультацией</span> мы
                    дарим:</h5>
                <div className={style.subBlockGrid}>
                    <div className={style.subBlock}>
                        <div className={style.titleRightBlockMobile}>
                            <div className={style.divider}/>
                            <h5>Skype аудит</h5>
                        </div>
                        <h5 className={style.titleRightBlock}>Виджеты</h5>
                        <span>30 готовых<br/>решений</span>
                    </div>
                    <div className={style.subBlock}>
                        <div className={style.titleRightBlockMobile}>
                            <div className={style.divider}/>
                            <h5>30 виджетов</h5>
                            <span>с показателями<br/>вашего бизнеса</span>
                        </div>
                        <h5 className={style.titleRightBlock}>Dashboard</h5>
                    </div>
                    <div className={style.subBlock}>
                        <div className={style.titleRightBlockMobile}>
                            <div className={style.divider}/>
                            <h5>Dashboard</h5>
                        </div>
                        <h5 className={style.titleRightBlock}>Skype Аудит</h5>
                        <span>отдела продаж<br/>и CRM системы</span>
                    </div>
                    <div className={style.subBlock}>
                        <div className={style.titleRightBlockMobile}>
                            <div className={style.divider}/>
                            <h5>Месяц аmoCRM</h5>
                        </div>
                        <h5 className={style.titleRightBlock}>35 дней</h5>
                        <span>использования<br/>CRM</span>
                    </div>
                </div>
                <button className={style.btn}>Получить консультацию</button>
            </div>
            <span className={style.redBallTwo}/>
        </div>
    )
}

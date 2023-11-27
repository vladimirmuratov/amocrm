import style from './layout.module.css'
import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'

export const Layout = ({children}) => {
    return (
        <main className={style.wrapper}>
            <div className={style.shadow}/>
            <div className={style.container}>
                <Header/>
                {children}
                <Footer/>
            </div>
        </main>
    )
}

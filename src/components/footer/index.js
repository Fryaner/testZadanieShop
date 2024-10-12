import style from './style.module.css';
import { Inst, Vk, Tel } from '../../assets/images';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.info}>
                <div className={style.title}>
                    <p>TestZadanie</p>
                    <p>Орлов Илья Андреевич | Junior Frontend-разработчик</p>
                </div>
                <div className={style.infoUser}>
                    <p>О себе</p>
                    <p>Возраст: 22 года</p>
                    <p>Родной город: Хабаровск</p>
                    <p>Университет: Дальневосточный государственный университет путей сообщения</p>
                </div>
            </div>
            <div className={style.line}>
                <div></div>
            </div>
            <div className={style.contactsFooter}>
                <p>Контакты</p>
                <div className={style.contacts}>
                    <div className={style.social}>
                        <a href="https://www.instagram.com/?hl=ru&ysclid=m25uatrf8o475861885"><Inst/></a>
                        <a href="https://vk.com/thedkfilms"><Vk/></a>
                        <a href="https://web.telegram.org/"><Tel/></a>
                    </div>
                    <div className={style.otherSocial}>
                        <a href="mailto:ilya.orlov123@mail.ru">Email: ilya.orlov123@mail.ru</a>
                        <a href="tel:+7 923 218 33 76">Номер телефона: +7 923 218 33 76</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
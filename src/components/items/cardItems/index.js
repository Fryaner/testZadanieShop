import style from './style.module.css';
import { CirclePlus, RussianRuble } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import {addProduct} from '../../../store/slices/productsAddedSlice/index'

const CardItems = ({item, title, image, cost, isNew}) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productsAdded.products)

    function countProductsWithTitle () {
        return products.filter((product) => product.title === title).length;
    };

    return (
        <article className={style.cardItem}>
            <div className={style.cardInfo}>
                <div className={style.cardImg}>
                    <a href="$"><img src={image} alt="мороженное"/></a>
                </div>
                <div className={style.cardTitle}>
                    <a href="#">{title}</a>
                </div>
                <div className={style.cardCost}>
                    <div className={style.cardCostCurrent}>
                        <p>Цена: {cost}</p>
                        <RussianRuble width={15}/>
                    </div>
                </div>
                {isNew ? <p className={style.cardNew}>New</p> : <></>}
            </div>
            <div className={style.cardAdd}>
                <div className={style.cardFooter}>
                    <div className={style.cardAddBtn}>
                    <CirclePlus onClick={() => dispatch(addProduct(item))} color='#5D6BEE'/>
                    <a onClick={() => {dispatch(addProduct(item))} }>Добавить товар</a>              
                    </div>
                    <div className={style.counts}>
                    {countProductsWithTitle() === 0 ? <></> : 
                    <>
                    <input type='test' value={countProductsWithTitle()}/>
                    </>}              
                    </div>
                </div>
            </div>
            <div>
            </div>
        </article>
    )
}

export default CardItems;
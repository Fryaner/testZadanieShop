import { RussianRuble, ShieldPlus, ShoppingBag, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.css';
import { addFilteredProducts } from '../../store/slices/productsAddedSlice';
import { useState } from 'react';

const Header = () => {
    const [isActive, setActive] = useState(false)

    const productsFetch = useSelector((state) => state.products.products);
    const productsAddedSum = useSelector((state) => state.productsAdded.reduceSum);
    const productsAddedCount = useSelector((state) => state.productsAdded.count);
    const dispatch = useDispatch()

    const [searchParams, setSearchParams] = useState('');
    const handlerSearch = (event) =>  setSearchParams(event.target.value)

    const products = productsFetch.slice(0, 10).filter((product) =>
        product.title.toLowerCase().includes(searchParams.toLowerCase())
      );

      dispatch(addFilteredProducts(products));


    return (
        <header className={style.header}>
            <div className={style.titleBlock}>
                <a href="#" className={style.title}>TestZadanie</a>
                <div className={style.search}>
                    <input className={`${style.searchInput} ${isActive ? style.active : ''}`} onClick={() => setActive(true)} onChange={(event) => handlerSearch(event)} type="text" placeholder="Введите название товара"/>
                    <X className={`${style.closeSearch} ${isActive ? style.active : ''}`} onClick={() => setActive(false)}/>
                </div>
            </div>
            <div className={style.shopping}>
                <div className={style.trash}>
                    <a href="#">
                        <ShoppingBag/>
                        </a>
                    <div className={style.count}>{productsAddedCount}</div>
                </div>
                <p className={style.reduceSum}>{productsAddedSum}<RussianRuble width={12}/></p>
            </div>
        </header>
    )
}

export default Header;
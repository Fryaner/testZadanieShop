import { useSelector, useDispatch } from "react-redux";
import CardItems from "./cardItems";
import style from './style.module.css';
import { useEffect } from "react";
import {fetchProducts} from '../../store/slices/prodcutsSlice/index';

const Items = () => {
    const filteredProducts = useSelector((state) => state.productsAdded.filterProducts);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <main>
            <section className={style.items}>
            {status == 'Loading' ? <span class={style.spinner}></span> : <></>}
            {filteredProducts.map((item) =>
                <CardItems 
                    key={item.id}
                    item={item}
                    title={item.title} 
                    image={item.image} 
                    cost={item.cost} 
                    isNew={item.new}/>
            )}
            </section>
        </main>
    )
}

export default Items;
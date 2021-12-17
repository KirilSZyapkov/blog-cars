
import Item from './Item/Item';
import style from './HomePage.module.css';

function HomePage() {
    return (
        <section className={style.container}>
            <Item />
            <Item />
            <Item />
        </section>
    );
}

export default HomePage;
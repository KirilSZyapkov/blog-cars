import style from "./Item.module.css";

function Item() {
    return (
        <div className={style.column}>
            <div className={style.card}>
                <img src="img1.jpg" alt="Jane" />
                <div className={style.container}>
                    <h2>Jane Doe</h2>
                    <p className={style.title}>CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>example@example.com</p>
                    <p><button className={style.button}>Contact</button></p>
                </div>
            </div>
        </div>
    );
}

export default Item;
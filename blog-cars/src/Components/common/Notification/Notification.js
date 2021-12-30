
import style from './Notification.module.css';

function Notification({ message }) {
    return (
        <div className={style.notification}>
            <h3>{message}</h3>
        </div>
    );
}

export default Notification;
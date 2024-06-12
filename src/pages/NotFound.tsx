import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Aradığınız sayfa bulunamadı</p>
            <Link to="/">Ana Sayfaya Dön</Link>
        </div>
    );
};

export default NotFound;

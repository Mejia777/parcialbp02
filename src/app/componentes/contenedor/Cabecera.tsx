import { NavLink } from "react-router-dom";
import milogo from "../../../assets/img/logoReact.png";

export const Cabecera = () => {
    return (
        <>
            <nav
                className="navbar bg-dark border-bottom border-body"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={milogo} alt="Logo" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pelcre">
                                    Peliculas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="*">
                                    acerca de...
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const Login = () => {
    return (
        <div className="login">
            <div className="frame-wrapper">
                <div className="frame">
                    <div className="LOGO-wrapper">
                        <img className="LOGO" alt="Logo" src="./LOGO.svg" />
                    </div>
                    <div className="div">
                        <img className="group" alt="Group" src="./login.svg" />
                        <div className="frame-2">
                            <div className="div-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-2">Iniciar Sesión</div>
                                    <div className="frame-4">
                                        <div className="correo">
                                            <div className="text-wrapper-3">Correo electrónico</div>
                                            <input className="frame-5" type="text" placeholder="example@gmail.com" />
                                        </div>
                                        <div className="password">
                                            <div className="text-wrapper-3">Contraseña</div>
                                            <input className="frame-5" type="password" placeholder="*********" />
                                        </div>
                                    </div>
                                    <Link to="/reset" className="text-wrapper-5">
                                        ¿Olvidaste tu Contraseña?
                                    </Link>
                                </div>
                            </div>
                            <div className="frame-6">
                                <div className="frame-7">
                                    <button className="rectangle" onClick={() => { window.location.href = "/documents"; }}>
                                        <div className="text-wrapper-6">Iniciar Sesión</div>
                                    </button>
                                </div>
                                <div className="frame-9">
                                    <button className="rectangle-2" onClick={() => { window.location.href = "/register"; }}>
                                        <div className="frame-10">
                                            <div className="text-wrapper-7">Registrarse</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

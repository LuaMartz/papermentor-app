import React from "react";
import "./Register.css";

export const Register = () => {
    return (
        <div className="register">
            <div className="frame">
                <div className="LOGO-wrapper">
                    <div className="LOGO">
                        <img className="icon" alt="Icon" src="LOGO.svg" />
                    </div>
                </div>
                <div className="div">
                    <img className="group" alt="Group" src="./register.svg" />
                    <div className="frame-2">
                        <div className="div-wrapper">
                            <div className="frame-3">
                                <div className="text-wrapper-2">Registrarse</div>
                                <div className="frame-4">
                                    <div className="correo">
                                        <div className="text-wrapper-3">Nombre Completo</div>
                                        <input className="frame-5" type="text" placeholder="Jhon Doe" />
                                    </div>
                                    <div className="correo">
                                        <div className="text-wrapper-3">Correo electrónico</div>
                                        <input className="frame-5" type="text" placeholder="example@gmail.com" />
                                    </div>
                                    <div className="password">
                                        <div className="text-wrapper-3">Contraseña</div>
                                        <input className="frame-5" type="password" placeholder="*********" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-6">
                            <div className="frame-7">
                                <button className="rectangle" onClick={() => { window.location.href = "/documents"; }}>
                                    <div className="frame-8">
                                        <div className="text-wrapper-5">Registrarse</div>
                                    </div>
                                </button>
                            </div>
                            <div className="frame-9">
                                <button className="rectangle-2" onClick={() => { window.location.href = "/login"; }}>
                                    <div className="frame-10">
                                        <div className="text-wrapper-6">Iniciar Sesión</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
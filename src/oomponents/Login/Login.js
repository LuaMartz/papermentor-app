import React from "react";
import "./Login.css";

export const Login = () => {
    return (
        <div className="login">
            <div className="frame-wrapper">
                <div className="frame">
                    <div className="LOGO-wrapper">
                        <div className="LOGO">
                            <img className="icon" alt="Icon" src="icon.svg" />
                            <div className="text">
                                <div className="text-wrapper">PaperMentor</div>
                            </div>
                        </div>
                    </div>
                    <div className="div">
                        <img className="group" alt="Group" src="group-3.png" />
                        <div className="frame-2">
                            <div className="div-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-2">Iniciar Sesión</div>
                                    <div className="frame-4">
                                        <div className="correo">
                                            <div className="text-wrapper-3">Correo electrónico</div>
                                            <div className="frame-5">
                                                <div className="text-wrapper-4">example@gmail.com</div>
                                            </div>
                                        </div>
                                        <div className="password">
                                            <div className="text-wrapper-3">Contraseña</div>
                                            <div className="frame-5">
                                                <div className="text-wrapper-4">*********</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-wrapper-5">¿Olvidaste tu Contraseña?</div>
                                </div>
                            </div>
                            <div className="frame-6">
                                <div className="frame-7">
                                    <div className="rectangle" />
                                    <div className="frame-8">
                                        <div className="text-wrapper-6">Iniciar Sesión</div>
                                    </div>
                                </div>
                                <div className="frame-9">
                                    <div className="rectangle-2" />
                                    <div className="frame-10">
                                        <div className="text-wrapper-7">Registrarse</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

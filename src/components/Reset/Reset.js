import React from "react";
import "./Reset.css";

export const Reset = () => {
    return (
        <div className="reset">
            <div className="frame-wrapper">
                <div className="frame">
                    <div className="LOGO-wrapper">
                        <div className="LOGO">
                            <img className="icon" alt="Icon" src="LOGO.svg" />
                        </div>
                    </div>
                    <div className="div">
                        <img className="group" alt="Group" src="reset.svg" />
                        <div className="frame-2">
                            <div className="div-wrapper">
                                <div className="frame-3">
                                    <div className="text-wrapper-2">Reestablecer Contraseña</div>
                                    <div className="frame-4">
                                        <div className="password">
                                            <div className="text-wrapper-3">Contraseña</div>
                                            <input className="frame-5" type="password" placeholder="*********" />
                                        </div>
                                        <div className="password">
                                            <div className="text-wrapper-3">Repetir Contraseña</div>
                                            <input className="frame-5" type="password" placeholder="*********" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-6">
                                <div className="frame-7">
                                    <button className="rectangle" onClick={() => { window.location.href = "/documents"; }}>
                                        <div className="text-wrapper-5">Reestablecer Contraseña</div>
                                    </button>
                                </div>
                                <div className="frame-9">
                                    <button className="rectangle-2" onClick={() => { window.location.href = "/login"; }}>
                                        <div className="frame-10">
                                            <div className="text-wrapper-7">Iniciar Sesión</div>
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
export default Reset;
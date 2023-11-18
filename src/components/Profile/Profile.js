import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

export const Profile = () => {
    return (
        <div className="profile">
            <div className="frame">
                <div className="menu">
                    <div className="items">
                        <div className="div-wrapper">
                            <div className="div">
                                <div className="LOGO-wrapper">
                                    <div className="LOGO">
                                        <img className="icon" alt="Icon" src="LOGO.svg" />
                                    </div>
                                </div>
                                <div className="subitems">
                                    <Link to="/pizarra" className="div-2">
                                        <img className="img" alt="Presentation board" src="presentation-board.svg" />
                                        <div className="text-2">
                                            <div className="text-wrapper-2">Pizarra</div>
                                        </div>
                                    </Link>
                                    <Link to="/documents" className="div-2">
                                        <img className="document" alt="Document" src="document.svg" />
                                        <div className="text-2">
                                            <div className="text-wrapper-2">Documentos</div>
                                        </div>
                                    </Link>
                                    <Link to="/profile" className="div-2">
                                        <img className="img" alt="Profile" src="profile.svg" />
                                        <div className="text-2">
                                            <div className="text-wrapper-2">Perfil</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="frame-2">
                <div className="title">
                    <div className="text-wrapper-3">Mi Perfil</div>
                </div>
                <div className="frame-3">
                    <div className="img-bg">
                        <img className="img" alt="Profile" src="profile-green.svg" />
                    </div>
                    <div className="frame-4">
                        <div className="frame-5">
                            <div className="frame-6">
                                <div className="frame-7">
                                    <div className="frame-8">
                                        <div className="frame-9">
                                            <div className="correo-wrapper">
                                                <div className="correo">
                                                    <div className="text-wrapper-4">Jhon Doe</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame-10">
                                        <div className="frame-11">
                                            <div className="frame-12">
                                                <div className="correo-2">
                                                    <div className="text-wrapper-5">example@gmail.com</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="frame-13">
                                    <div className="frame-14">
                                        <button className="rectangle" onClick={() => { window.location.href = "/reset"; }}>
                                            <div className="frame-15">
                                                <div className="text-wrapper-6">Cambiar contraseña</div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="frame-14">
                                        <button className="rectangle-2" onClick={() => { window.location.href = "/onboarding"; }}>
                                            <div className="frame-16">
                                                <div className="text-wrapper-6">Cerrar Sesión</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-17">
                            <div className="frame-18">
                                <div className="frame-7">
                                    <div className="frame-8">
                                        <div className="frame-9">
                                            <div className="correo-wrapper">
                                                <div className="correo">
                                                    <div className="text-wrapper-4">Historial</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame-19">
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-21">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Revisado</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-26">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Pendiente de Revisión</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-21">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Revisado</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-26">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Pendiente de Revisión</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-21">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Revisado</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-26">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Pendiente de Revisión</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-21">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Revisado</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-26">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Pendiente de Revisión</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-21">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Revisado</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="frame-20">
                                            <div className="frame-18">
                                                <div className="frame-7">
                                                    <div className="frame-8">
                                                        <div className="frame-9">
                                                            <div className="correo-wrapper">
                                                                <div className="correo">
                                                                    <div className="text-wrapper-4">Titulo Documento</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-26">
                                                    <div className="frame-22">
                                                        <button className="rectangle-3" >
                                                            <div className="frame-23">
                                                                <div className="text-wrapper-6">Leer Más</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className="frame-24">
                                                        <button className="rectangle-4" >
                                                            <div className="frame-25">
                                                                <div className="text-wrapper-7">Pendiente de Revisión</div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
export default Profile;
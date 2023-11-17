import React from "react";
import "./Documents.css";
import { Link } from "react-router-dom";

export const Documents = () => {
    return (
        <div className="documents">
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
                    <div className="text-wrapper-3">Explorar Documentos</div>
                </div>
                <div className="frame-3">
                    <div className="frame-4">
                        <div className="frame-5">
                            <input type="Buscar" placeholder="Buscar" className="frame-6" />
                            <div className="group-wrapper">
                                <div className="group">
                                    <div className="frame-9">
                                        <button className="rectangle">
                                            <img className="frame-10" alt="Search" src="search.svg" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="frame-11">
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <div className="frame-26">
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="frame-16">
                                    <div className="correo-wrapper">
                                        <div className="correo">
                                            <div className="text-wrapper-5">Titulo Documento</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-17">
                                <div className="frame-18">
                                    <div className="frame-19">
                                        <div className="correo-2">
                                            <p className="p">
                                                Resumen Documento Resumen Documento Resumen Documento Resumen Documento Resumen Documento
                                                Resumen Documento Resumen Documento
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-20">
                            <div className="frame-21" >
                                <button className="rectangle-2" >
                                    <div className="frame-22">
                                        <div className="text-wrapper-6">Leer Más</div>
                                    </div>
                                </button>
                            </div>
                            <button className="frame-23" >
                                <div className="rectangle-3" />
                                <div className="frame-24">
                                    <div className="text-wrapper-7">Pendiente Para Revisión</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Documents;
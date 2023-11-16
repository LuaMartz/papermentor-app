import React from "react";
import "./Onboarding.css";

export const Onboarding = () => {
    return (
        <div className="onboarding">
            <div className="frame-wrapper">
                <div className="frame">
                    <div className="LOGO-wrapper">
                        <img className="LOGO" alt="Logo" src="../assets/LOGO.svg" />
                    </div>
                    <div className="div">
                        <div className="group">
                            <div className="overlap-group">
                                <img className="vector" alt="Vector" src="../assets/vector.svg" />
                                <div className="illustration" />
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="text-wrapper">¡Bienvenido a PaperMentor!</div>
                            <div className="frame-3">
                                <p className="p">Tu plataforma para la colaboración académica</p>
                                <p className="encuentra-escritores">
                                    Encuentra escritores expertos para revisar, calificar y apoyar tus investigaciones.
                                    <br />
                                    Construye documentos técnicos de investigación de calidad con la ayuda de profesionales.
                                </p>
                            </div>
                            <div className="frame-4">
                                <div className="rectangle" />
                                <div className="div-wrapper">
                                    <div className="text-wrapper-2">Comenzar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

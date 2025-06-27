import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./data";

export default function Item({ id }) {
    const project = projects.find((item) => item.id === id);
    if (!project) return <p>Project not found</p>;

    const { title, subtitle, imgSrc } = project;

    return (
        <>
            <div className="overlay">
                <Link to="/" />
            </div>
            <div className="card-content-container open">
                <div className="card-content">
                    <div className="card-image-container">
                        <img className="card-image" src={imgSrc} alt={title} />
                    </div>
                    <div className="title-container">
                        <span className="category">{subtitle}</span>
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

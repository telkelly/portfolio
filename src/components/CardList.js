import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ projects, displayCount = null, linkToDetail = false }) => {
    const itemsToShow = displayCount ? projects.slice(0, displayCount) : projects;

    return (
        <>
            {itemsToShow.map(({ id, title, subtitle, imgSrc, link, stack }) => (
                <li className="card" key={id}>
                    <div className="card-content-container">
                        <div className="card-content">
                            <div className="card-image-container">
                                <img className="card-image" src={imgSrc} alt={title} />
                            </div>
                            <div className="title-container">
                                <span className="category">{subtitle}</span>
                                <h2>{title}</h2>
                                {stack && <p className="stack">Stack: {stack}</p>}
                            </div>
                        </div>
                    </div>

                    {linkToDetail ? (
                        <Link to={`/${id}`} className="card-open-link" />
                    ) : (
                        <div className="card-btn">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                View
                            </a>
                        </div>
                    )}
                </li>
            ))}
        </>
    );
};

export default CardList;

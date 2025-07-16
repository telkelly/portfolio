import React from 'react';
import {projects} from '../components/data'
import CardList from "../components/CardList";
import { TbMail } from "react-icons/tb";
import { IoArrowBackOutline } from "react-icons/io5";
import {Link} from "react-router-dom";


const ProjectsPage = () => {
    return (
        <div className="container">
            <h1>The Projects</h1>
            <div className="wrapper">
                <Link to={`/`}><IoArrowBackOutline className="icon" /></Link>
                <div className="list-projects">
                    <CardList projects={projects}/>
                </div>
                <TbMail className="icon"/>
            </div>
        </div>
    );
};

export default ProjectsPage;
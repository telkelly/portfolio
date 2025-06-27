import React from 'react';
import { projects} from '../components/data'
import CardList from "../components/CardList";

const ProjectsPage = () => {
    return (
        <>
            <h1>My Projects</h1>
            <div className="list-projects">
                <CardList projects={projects} />
            </div>
        </>
    );
};

export default ProjectsPage;
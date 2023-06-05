
const filtrateProjects = (projects: IApiProject[], categories: string[]) => {
    const sortedProjectsObject = {};
    if(categories.length) {
        categories.map(category => {
            if(projects.length) 
                sortedProjectsObject[category] = projects
                    .filter(project => project.category.includes(category.toLowerCase()))
                    .sort((a, b) => a.priority - b.priority);
        });
    }
    return sortedProjectsObject;
};
    
export default filtrateProjects;
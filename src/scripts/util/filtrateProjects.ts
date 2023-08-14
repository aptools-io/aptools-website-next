
const filtrateProjects = (
    projects: IApiProject[],
    categories: string[], 
    selectedCategories: string[] = null, 
    asArray: boolean = false
) => {
    const sortedProjectsObject = {};
    let sortedProjectsArray = [];
    const cats = categories || selectedCategories || [];
    if(cats.length) {
        cats.forEach(category => {
            if(projects.length) 
            {
                const elements = projects
                    .filter(project => project.category.includes(category.toLowerCase()))
                    .sort((a, b) => a.priority - b.priority);
                if(!asArray) sortedProjectsObject[category] = elements;
                else sortedProjectsArray = [...sortedProjectsArray, ...elements];
            }
                
        });
    }
    if(asArray) return sortedProjectsArray;
    return sortedProjectsObject;
};
    
export default filtrateProjects;
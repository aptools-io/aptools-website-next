import { projects } from "src/scripts/api/requests";

const fetchProjects = (terms, projectsElement, setProjects) => {
    let ready = true;

    setProjects({ ...projectsElement, loading: true });
    projects.getData().then((response) => {
        if (ready)
            setProjects({
                name: terms,
                data: response.filter((x) => {
                    if (terms === "") return response;
                    return (
                        x.name.toLowerCase().indexOf(terms.toLowerCase()) !== -1
                    );
                }),
                loading: false
            });
    });

    return () => {
        ready = false;
    };
};

export default fetchProjects;

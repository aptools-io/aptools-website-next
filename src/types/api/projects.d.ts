interface IApiProject {
    "category": string[];
    "description": string;
    "image": string;
    "name": string;
    "priority": number;
    "socials": IApiProjectSocials[],
}

interface IApiProjectSocials {
    "image_src": string;
    "link": string;
    "name": string;
}

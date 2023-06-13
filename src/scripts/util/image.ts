const getDexImageFromApi = (string: string) => {
    return `${process.env.BASE_HTTPS_URL}/images/${string.toLowerCase().replace(/ /g, "-")}.png`;
};

export { getDexImageFromApi };
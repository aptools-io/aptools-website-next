const getImageFromApi = (string: string) => {
    return `${process.env.BASE_IMAGES_URL}/${string.toLowerCase().replace(/ /g, "-")}.png`;
};

export { getImageFromApi };
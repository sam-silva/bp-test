import { currentSelectedMovieIndex } from "../stores/stores";

export const cardImage = images => images.find(img => img.type === "Poster");
export const getDirector = details => findInDetails(details, "director") && findInDetails(details, "director").directo || "Unknow";
export const getStoryLine = details => findInDetails(details, "storyline") && findInDetails(details, "storyline").storyline || "Unknow";
export const getCast = details => findInDetails(details, "cast") && findInDetails(details, "cast").cast || "Unknow";
export const setCurrentIndex = index => currentSelectedMovieIndex.set(index);
const findInDetails = (details, key) => details.find(x => x[key])
export const findVideo = videos => videos.find(v => v.url)
import { getDirector, cardImage, getStoryLine, findVideo, getCast } from "../utils/movies"
export const textInputData = (movie, updateMovieStore) => [
    {
        id: "title",
        label: "Title",
        defaultValue: movie.title,
        updateStore: updateMovieStore.update("title"),
        validations: {
            required: true,
            max: 150,
            min: 2
        }
    },
    {
        id: "director",
        label: "Director",
        defaultValue: getDirector(movie.details),
        updateStore: updateMovieStore.update("director"),
        validations: {
            required: true,
            max: 50,
            min: 3
        }
    },
    {
        id: "cast",
        label: "Cast",
        defaultValue: getCast(movie.details),
        updateStore: updateMovieStore.update("cast"),
        validations: {
            max: 150,
            min: 3
        }
    },
    {
        id: "storyline",
        label: "Story Line",
        updateStore: updateMovieStore.update("storyline"),
        defaultValue: getStoryLine(movie.details),
        validations: {
            max: 150,
            min: 2
        }
    },
    {
        id: "image",
        label: "Image",
        defaultValue: cardImage(movie.images).url,
        updateStore: updateMovieStore.update("image"),
        validations: {
            required: true,
            url: true
        }
    },
    {
        id: "trailer",
        label: "Trailer",
        updateStore: updateMovieStore.update("trailer"),
        defaultValue: movie.videos && movie.videos.length > 0 && findVideo(movie.videos) && findVideo(movie.videos).url || "",
        validations: {
            url: true
        }
    }
]
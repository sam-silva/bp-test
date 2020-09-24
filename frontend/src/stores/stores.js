import { writable } from 'svelte/store';

export const movies = writable([]);

export const currentSelectedMovieIndex = writable(null)

export const inputErrorStore = writable(false)

function updateMovieObject(value) {
    let subscribers = []
    let state = value

    return {
        subscribe(listener) {
            subscribers.push(listener)
            return (subscriber) => {
                const index = subscribers.indexOf(subscriber)
                if (index !== -1) {
                    subscribers.splice(index, 1)
                }
            }
        },

        update(key) {
            return (newValue) => {
                state[key] = newValue
                if (subscribers.length > 0) {
                    subscribers.forEach(s => s(state))
                }
            }
        }
    }
}

export const updateMovieStore = updateMovieObject({})

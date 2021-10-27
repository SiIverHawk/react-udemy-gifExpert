export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=dBm29Rf9V7NbopvJHMNOw0PosLYDZh0q`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => {
        return {
            id,
            title,
            url
        }
    })
    return gifs
}
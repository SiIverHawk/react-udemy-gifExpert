export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=0xTRluEoUrM7EIfwEEFd4qvUm7V7gOju`
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
const API_KEY = 'api_key=32e4a70f241fc82f4fed9f51c2d3980a'

const multiSearch = async (searchQuery) => {
    console.log('searchQuery: ' + searchQuery)
    const baseURL = 'https://api.themoviedb.org/3/search/multi?'
    const URL = `${baseURL}${API_KEY}&query=${searchQuery}&page=1`
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

export { multiSearch }


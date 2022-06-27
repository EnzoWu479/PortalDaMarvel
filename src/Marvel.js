const timeStamp = "1655430286";
const API_KEY = "4dda311b717a0f3b369004e0a09f8e89";
const MD5 = "2ae132b3ad2a854f028780e5eadea7b9";
const API_BASE = "http://gateway.marvel.com/v1/public/";
//https://api.themoviedb.org/3/search/company?api_key=[MY_KEY]&query=Marvel&page=1

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
const Marvel = {
    getComics: async () => basicFetch(`characters/1009165/comics?ts=${timeStamp}&apikey=${API_KEY}&hash=${MD5}&limit=50&offset=3`),
    getCharacters: async () => basicFetch(`events/29/characters?ts=${timeStamp}&apikey=${API_KEY}&hash=${MD5}&limit=50&offset=3`)
};
export default Marvel;
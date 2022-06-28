const basicFetch = async (endpoint) => {
    const req = await fetch(`${process.env.REACT_APP_MARVEL_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
const Marvel = {
    getComics: async () => basicFetch(`characters/1009165/comics?ts=${process.env.REACT_APP_MARVEL_TIMESTAMP}&apikey=${process.env.REACT_APP_MARVEL_KEY}&hash=${process.env.REACT_APP_MARVEL_MD5}&limit=50&offset=3`),
    getCharacters: async () => basicFetch(`events/29/characters?ts=${process.env.REACT_APP_MARVEL_TIMESTAMP}&apikey=${process.env.REACT_APP_MARVEL_KEY}&hash=${process.env.REACT_APP_MARVEL_MD5}&limit=50&offset=3`)
};
export default Marvel;
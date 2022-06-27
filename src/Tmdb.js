const API_KEY = "0c9812bd82631e002e2b14606098a6a9";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
const tmdb = {
    getMoviesID: async () => basicFetch(`/search/company?api_key=${API_KEY}&query=Marvel&page=1`),
    getMoviesInfo: async () => basicFetch(`/list/84979?api_key=${API_KEY}&language=pt-BR&sort_by=primary_release_date.desc&page=1`)
};
export default tmdb;
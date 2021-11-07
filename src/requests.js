const API_KEY = "7724f8cc9a9cd6be8d764ad9dc4bef91";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=12,16,28`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=18,80,28,53`,
};

export default requests;

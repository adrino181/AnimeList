export const fetchAnimeList = (name, limit=10) => `https://api.jikan.moe/v3/search/anime?q=${name}&limit=${limit}`

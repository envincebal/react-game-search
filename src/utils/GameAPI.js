const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const key = "8cd10a7136710c1003c8e216d85941ace5a1f00e";

export const getGames = (searchGame) => {
  const endpoint = `https://www.giantbomb.com/api/search/?api_key=`;
  const url = proxyUrl + endpoint + key + `&format=json&query=${searchGame}&limit=30`;

  return fetch(url)
  .then(res => res.json())
  .then(res2 => console.log(res2));
}


const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const KEY = "2d20223674e609e0aa7b3ad29d181f8b";

async function fetchWithErrorHandling(url = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchSearch(cityName) {
  return fetchWithErrorHandling(`${BASE_URL}q=${cityName}&appid=${KEY}`);
}

export function fetchDetails(id) {
  return fetchWithErrorHandling(`${BASE_URL}id=${id}&appid=${KEY}`);
}

const BASE_URL = "HTTPS://api.openweathermap.org/data/2.5/";
const KEY = "2d20223674e609e0aa7b3ad29d181f8b";

async function fetchWithErrorHandling(url = "") {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchSearch(cityName) {
  return fetchWithErrorHandling(
    `${BASE_URL}weather?q=${cityName}&appid=${KEY}`
  );
}

export function fetchDetails(id) {
  return fetchWithErrorHandling(`${BASE_URL}weather?id=${id}&appid=${KEY}`);
}

export function fetchFiveDays(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}forecast/daily?id=${id}&appid=${KEY}`
  );
  // api.openweathermap.org/data/2.5/forecast/daily?id=524901&appid={API key}
}

// api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}

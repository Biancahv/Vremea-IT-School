//API Key-urile NU ar trebui sa fie stocate in format text, nu este sigur.
//
const APPID = "05b42e3fe6a40b7fcf24b6e63b428e6e";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=RO&appid=${APPID}`;
}

function getForcastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=RO&appid=${APPID}`;
}

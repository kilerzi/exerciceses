let weatherForecast = {
  city: "New York",
  temperature: 20, // temperatura vo Celsius
  conditions: "Sunny",
};

//Celsius vo farenheight
function logWeatherForecast(forecast) {
  let tempfarenheight = (forecast.temperature * 9) / 5 + 32;

  console.log(
    `The weather in ${forecast.city} is ${forecast.conditions} with a temperature of ${tempfarenheight}F.`
  );
}

logWeatherForecast(weatherForecast);

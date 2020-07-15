export class Weather {
  constructor(
    type,
    description,
    temperature,
    temperatureMin,
    temperatureMax,
    pressure,
    humidity,
    windSpeed,
    iconCode
  ) {
    this.type = type;
    this.description = description;
    this.temperature = Math.round(temperature);
    this.temperatureMin = temperatureMin;
    this.temperatureMax = temperatureMax;
    this.pressure = pressure;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}

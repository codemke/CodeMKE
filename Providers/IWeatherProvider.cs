using System.Collections.Generic;
using codemke.Models;

namespace codemke.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}

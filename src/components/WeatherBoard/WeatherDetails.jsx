import MaxIcon from "../../assets/icons/temp-max.svg"
import MinIcon from "../../assets/icons/temp-min.svg"
import Cloud from "../../assets/icons/cloud.svg"
import Humidity from "../../assets/icons/humidity.svg"
import Wind from "../../assets/icons/wind.svg"
import { useContext } from "react"
import { WeatherContext } from "../../Context/WeatherContext"
export default function WeatherDetails(){
    const weatherData=useContext(WeatherContext)
    const {maxTemperature,
        minTemperature,
        humidity,
        cloudPercentage,
        wind}=weatherData.weatherData;
   
       return (
        <div>
        <p className="text-sm lg:text-lg font-bold uppercase mb-8">Thunderstorm with light drizzle</p>
        <ul className="space-y-6 lg:space-y-6">
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Max temperature</span>
                <div className="inline-flex space-x-4">
                    <p>{Math.round(maxTemperature/10)}°</p>
                    <img src={MaxIcon} alt="temp-max" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Min temperature</span>
                <div className="inline-flex space-x-4">
                    <p>{Math.round(minTemperature/10)}°</p>
                    <img src={MinIcon} alt="temp-min" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Humadity</span>
                <div className="inline-flex space-x-4">
                    <p>{humidity}%</p>
                    <img src={Humidity} alt="humidity" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Cloudy</span>
                <div className="inline-flex space-x-4">
                    <p>{cloudPercentage}%</p>
                    <img src={Cloud} alt="cloudy" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Wind</span>
                <div className="inline-flex space-x-4">
                    <p>{wind}km/h</p>
                    <img src={Wind} alt="wind" />
                </div>
            </li>
        </ul>
    </div>
       )
    }
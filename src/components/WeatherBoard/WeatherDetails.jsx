import MaxIcon from "../../assets/icons/temp-max.svg"
import MinIcon from "../../assets/icons/temp-min.svg"
import Cloud from "../../assets/icons/cloud.svg"
import Humidity from "../../assets/icons/humidity.svg"
import Wind from "../../assets/icons/wind.svg"
export default function WeatherDetails(){
       console.log()
       return (
        <div>
        <p className="text-sm lg:text-lg font-bold uppercase mb-8">Thunderstorm with light drizzle</p>
        <ul className="space-y-6 lg:space-y-6">
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Temp max</span>
                <div className="inline-flex space-x-4">
                    <p>19°</p>
                    <img src={MaxIcon} alt="temp-max" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Temp min</span>
                <div className="inline-flex space-x-4">
                    <p>19°</p>
                    <img src={MinIcon} alt="temp-min" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Humadity</span>
                <div className="inline-flex space-x-4">
                    <p>58%</p>
                    <img src={Humidity} alt="humidity" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Cloudy</span>
                <div className="inline-flex space-x-4">
                    <p>86%</p>
                    <img src={Cloud} alt="cloudy" />
                </div>
            </li>
            <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                <span>Wind</span>
                <div className="inline-flex space-x-4">
                    <p>5km/h</p>
                    <img src={Wind} alt="wind" />
                </div>
            </li>
        </ul>
    </div>
       )
    }
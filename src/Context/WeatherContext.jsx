import { createContext } from "react";
import useWeather from "../Hooks/FetchWeather";

export const WeatherContext=createContext(null);

export default function WeatherProvider({children}){
    const {weatherData, loading, error}=useWeather()
    return (
        <WeatherContext.Provider value={{weatherData, loading, error}}>
            {
                children
            }
        </WeatherContext.Provider>
    )
}

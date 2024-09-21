import { useEffect } from "react"
import { useState } from "react"

const useWeather=()=>{
  const [weatherData, setWeatherData]=useState({
    location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
  })
  const [loading, setLoading]=useState({status:false, message:""})
  const [error, setError]=useState(null)
      async function fetchWeatherData(latitude, longitude){
         try {
            setLoading({
                ...loading,
                status:true,
                message:"Data is fetching"
            })
            //fetch weather data
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&&appid=${import.meta.VITE_WEATHER_API_KEY}&&units=metric`)
             //if the response is not correct or corrupt
             if(!response.ok){
                const error="Something went wrong";
                throw new Error(error)
             }
             const fetchedData=await response.json();
             setWeatherData({
                ...weatherData,
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: longitude,
                latitude: latitude,
             })
         } catch (error) {
            setError(error);
         }finally{
             setLoading({
                status:false,
                message:""
             })
         }
      }
      useEffect(()=>{
         setLoading({
            status:true,
            message:"Finding location"
         })
         navigator.geolocation.getCurrentPosition((position)=>{
            fetchWeatherData(position.coords.latitude, position.coords.longitude);
         })
      },[])
      return {weatherData, loading, error};
}
export default useWeather
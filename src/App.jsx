import Header from "./components/Header/Header";
import WeatherBoard from "./components/WeatherBoard/WeatherBoard";
import WeatherProvider from "./Context/WeatherContext";
import useWeather from "./Hooks/FetchWeather";

function App() {
    return (
        <WeatherProvider>
        <div className="grid place-items-center h-screen">
            <Header/>
            <main>
                <section>
                    <WeatherBoard/>
                </section>
            </main>
        </div>
        </WeatherProvider>
    );
}

export default App;

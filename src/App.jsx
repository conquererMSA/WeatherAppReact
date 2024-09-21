import Header from "./components/Header/Header";
import WeatherBoard from "./components/WeatherBoard/WeatherBoard";
import useWeather from "./Hooks/FetchWeather";

function App() {
    useWeather();
    return (
        <div className="grid place-items-center h-screen">
            <Header/>
            <main>
                <section>
                    <WeatherBoard/>
                </section>
            </main>
        </div>
    );
}

export default App;

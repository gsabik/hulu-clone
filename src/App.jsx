import Hero from "./components/Hero";
import Cards from "./components/Cards";
import OtherSection from "./components/OtherSection";
import LiveSports from "./components/LiveSports";
import SelectYourPlan from "./components/SelectYourPlan";

const App = () => {
    return (
        <div className="text-white bg-black">
            <div>
                <Hero/>
                <Cards/>
                <OtherSection/>
                <LiveSports/>
                <SelectYourPlan/>
            </div>
        </div>
    )
}

export default App
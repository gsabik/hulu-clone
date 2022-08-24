import hdeLogo from "/assets/hde.jpg";

const Hero = () => {
    return (
        <div id="hero">
            <div className="h-full max-w-screen-xl mx-auto flex justify-center items-center">
                <div className="flex flex-col items-center space-y-6">
                    <p className="text-sm text-green-400 font-semibold">BUNDLE WITH ANY HULU PLAN & SAVE</p>
                    <img
                        alt="hdeLogo"
                        className="w-2/4"
                        src={hdeLogo}
                    />
                    <p className="text-center text-2xl font-medium">Get endless entertainment, live sports, and the shows and <br/> movies you love.</p>
                    <div className="flex justify-center w-full">
                        <button className="w-3/5 py-3 text-black font-semibold text-center bg-green-400 rounded-md">GET THE DISNEY BUNDLE</button>
                    </div>
                    <a href="/" className="text-gray-400 text-sm"><span className="underline">What's included?</span> See <span className="underline">Bundle terms</span>.</a>
                    <a href="/" className="text-lg underline">Sign up for Hulu only</a>
                </div>
            </div>
           
        </div>
    )
}

export default Hero
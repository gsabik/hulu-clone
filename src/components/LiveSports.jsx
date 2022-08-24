const LiveSports = () => {

    const logos = [
        {
            "alt": "cbs",
            "src": "./assets/cbs.png"
        },
        {
            "alt": "espn",
            "src": "./assets/espn.png"
        },
        // {
        //     "alt": "fs1",
        //     "src": ""
        // }
        ,
        {
            "alt": "nfl",
            "src": "./assets/nfl.png"
        }
    ]

    return (
        <div id="liveSports">
            <div className="h-full max-w-screen-xl mx-auto flex justify-start items-center">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-5xl font-semibold">Live Sports</h2>
                    <p className="text-lg">Catch your games at home or on the go. Stream live games <br/> from major college and pro leagues including the NCAA®, NBA, <br/> NHL, NFL, and more.</p>
                    <div className="flex flex-row">
                        {
                            logos.map(({ alt, src }) => (
                                <div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveSports
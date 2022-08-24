import cards from "../data/cards";

const Cards = () => {
    return (
        <div id="cards">
            <div className="h-full max-w-screen-xl mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col items-center space-y-6 py-20">
                    <p className="text-green-400 font-semibold">INCLUDED IN ALL PLANS</p>
                    <h2 className="text-5xl font-semibold">All The TV You Love</h2>
                    <p className="text-center text-xl">Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, <br/> kids shows, and more.</p>
                </div>
                <div className="w-full h-full grid grid-cols-4 gap-4">
                    {
                        cards.map(({ id, subtitle, title, img }) => (
                            <div key={id} className="shadow-inner" style={{backgroundImage:`url(${img})`, backgroundSize: "cover"}}>
                                <div className="h-full p-6">
                                    <p className="font-semibold">{subtitle}</p>
                                    <h4 className="text-xl font-semibold">{title}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards
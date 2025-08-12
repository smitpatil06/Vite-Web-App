import Nav from "./nav";

export default function Content(){
    return(
        <div className="container bg-yellow-100 h-168 w-full">
            <div className="p-2"><Nav /></div>
            <div className="grid grid-cols-10">
                <div className="container col-span-2 border-r ">
                    <div className="flex items-center justify-center bg-lime-300 my-3 mx-6 h-10">{" :> Main Menu"}</div>
                    <div className="pl-10 pb-0.5">1</div>
                    <div className="pl-10 pb-0.5">2</div>
                    <div className="pl-10 pb-0.5">3</div>
                    <div className="pl-10 pb-0.5">4</div>
                    <div className="pl-10 pb-0.5">5</div>
                    <div className="pl-10 pb-0.5">6</div>
                    <div className="pl-10 pb-0.5">7</div>
                    <div className="pl-10 pb-0.5">8</div>

                    <div className="flex items-center justify-center bg-lime-300 my-3 mx-6 h-10">{" :> Main Menu"}</div>
                    <div className="pl-10 pb-0.5">1</div>
                    <div className="pl-10 pb-0.5">2</div>
                    <div className="pl-10 pb-0.5">3</div>
                    <div className="pl-10 pb-0.5">4</div>
                    <div className="pl-10 pb-0.5">5</div>
                    <div className="pl-10 pb-0.5">6</div>
                    <div className="pl-10 pb-0.5">7</div>
                    <div className="pl-10 pb-0.5">8</div>
                </div>
                <div className="col-span-8">

                    <div className="grid grid-rows-2">

                            <div className="row-span-1 container h-70">
                                <h3 className="text-2xl ml-5 mb-2">Gallery</h3>
                                <p className="text-gray-700 leading-relaxed ml-5">
                                    Explore our collection of images showcasing memorable moments and highlights from various events.
                                </p>
                            </div>
                            <div className="row-span-1">
                                <div className="grid grid-cols-2">
                                    <div className="col-span-1 border-r h-65">
                                        <h3 className="text-2xl ml-5 mb-2">Subscription</h3>
                                    </div>
                                    <div className="col-span-1 border-l h-65">
                                        <h3 className="text-2xl ml-5 mb-2">Other Services</h3>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
            <div className="m-2">
                    <footer className="bg-lime-300 text-center p-2 border-t-1 border-l-1 border-r-1 border-gray-400">
                            <p className="text-sm text-gray-800">Copyright © 2014.</p>
                    </footer>            
            </div>
        </div>
    )
}
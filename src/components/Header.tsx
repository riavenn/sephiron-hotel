'use client';
import React from 'react';


const Header = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div
                className="relative h-screen w-full"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 flex flex-col gap-6 items-center justify-center h-screen">
                    <div className="text-center">
                        <h3
                            className="font-serif tracking-widest text-gray-200 text-xl md:text-3xl"
                        >
                            THIS IS LUXURY HOTEL
                        </h3>
                    </div>
                    <div className="text-gray-200 text-4xl md:text-6xl flex flex-col items-center text-center">
                        <h2
                            className="font-serif"
                        >
                            SUPERIOR HOTEL IN THE WORLD
                        </h2>
                        <div className="border-b-2 border-stone-700 w-1/3 mt-2"></div>
                    </div>
                    <div className="text-center">
                        <p className="text-sm md:text-lg text-center max-w-2xl text-gray-300 px-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odio
                            vel fugiat error quod molestias ex itaque eos ab dolorum!
                        </p>
                    </div>
                    <div>
                        <a
                            href="#rooms"
                            onClick={(e) => handleScroll(e, 'rooms')}
                            className="flex items-center justify-center text-l text-gray-200 bg-stone-700 rounded-xs p-3 h-10 w-30 cursor-pointer hover:bg-stone-800 transition-colors duration-300"
                        >
                            Rooms
                        </a>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Header;
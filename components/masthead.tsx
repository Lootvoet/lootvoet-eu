import React from 'react';
import Image from 'next/image';

const Masthead: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                <source src="/assets/exsites-bg.mp4" type="video/mp4" />
            </video>
            <div className="flex-grow-0 pt-10 transition-opacity duration-1000">
                <Image src="/assets/me.jpg" width={50} height={50} alt="logo" className="rounded-full" />
            </div>
            <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.6)] text-center flex-1 flex items-center justify-center flex-col">
                <h1 className="mb-6 text-4xl xl:text-5xl">Kevin Lootvoet</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
                    <span>Full Stack Developer</span>
                </h2>
            </div>
            <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
                <Image src="/assets/caret-down.svg" alt="Scroll down" width={67} height={67} />
            </div>
        </div>
    )
}

export default Masthead;

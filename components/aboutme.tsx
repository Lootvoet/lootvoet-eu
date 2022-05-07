import React from 'react';
import Image from 'next/image';
import Link from 'next/Link';
import Social from './social';

const AboutMe: React.FC = () => {
    return (
        <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
            <div className="container mx-auto px-11">
                <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                    <strong>Ik kan u helpen om betere apps sneller aan te leveren.</strong> Our team of expert engineers has created the best user experiencees in some of the mose popular apps worldwide.
                </p>
            </div>
            <div className="container mx-auto px-11 text-center mt-28">
                <h2>Over Mij</h2>
                <div className="mt-10">
                    <div>
                        <Image src="/assets/me.jpg" width={400 / 2} height={400 / 2} alt="logo" className="rounded-full drop-shadow-lg" />
                        <div className="text-2xl xl:text-3xl">Kevin Lootvoet</div>
                        <div className="flex flex-row items-center justify-center">
                            <Social
                                socialId="linkedin"
                                link="https://www.linkedin.com/in/kevin-lootvoet-7124a6161/"
                            />
                            <Social
                                socialId="instagram"
                                link="https://www.instagram.com/kevinlootvoet/"
                            />
                            <Social
                                socialId="github"
                                link="https://github.com/Lootvoet"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-[80vh] md:h-[90vh] overflow-hidden">

            {/* Background Image */}
            <Image
                src="/forside1.jpg"
                alt="Hero image"
                fill
                priority
                className="object-cover"
            />

            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Text + buttons (now aligned left) */}
            <div
                className="
        relative z-10 
        h-full 
        flex flex-col justify-start
        pt-20
        px-6 md:px-20 lg:px-28
        text-left
    "
            >
                <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-slate-700 drop-shadow-lg">
                    JOIN THE <span className="text-orange-400">SNOWSWAP</span><br />
                    COMMUNITY TODAY
                </h1>

                <p className="mt-8 text-lg md:text-2xl text-slate-700 max-w-2xl leading-tight">
                    Shop high-quality pre-loved ski gear or trade in your own to give great equipment a second life. Discover a more sustainable way to gear up for the mountains without compromising on performance.
                </p>
            </div>


        </section>
    );
}

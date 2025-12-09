import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-[80vh] md:h-[90vh] overflow-hidden">

            {/* Background Image */}
            <Image
                src="/forside.png"
                alt="Hero image"
                fill
                priority
                className="object-cover"
            />

            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text + button */}
            <div className="
                relative z-10 
                flex flex-col items-center justify-center 
                h-full text-orange-400 text-center px-6
            ">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Upgrade Your Winter Gear
                </h1>

                <p className="text-white mt-4 text-lg md:text-xl drop-shadow-md max-w-xl">
                    High-quality preloved ski wear for your next adventure.
                </p>

                <a
                    href="/collections/all"
                    className="
                        mt-6 inline-block 
                        bg-zinc-700 text-white font-semibold
                        px-6 py-3 rounded-md 
                        hover:bg-zinc-500 transition
                    "
                >
                    Shop Now
                </a>
            </div>

        </section>
    );
}

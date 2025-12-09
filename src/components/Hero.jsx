import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">

            {/* Background Image */}
            <Image
                src="/forside.png"
                alt="Hero image"
                fill
                priority
                className="object-cover"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="
                relative z-10 
                flex flex-col items-center justify-center 
                h-full text-white text-center px-6
            ">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Upgrade Your Winter Gear
                </h1>

                <p className="mt-4 text-lg md:text-xl drop-shadow-md max-w-xl">
                    High-quality preloved ski wear for your next adventure.
                </p>

                <a
                    href="/collections/all"
                    className="
                        mt-6 inline-block 
                        bg-white text-black font-semibold
                        px-6 py-3 rounded-md 
                        hover:bg-gray-200 transition
                    "
                >
                    Shop Now
                </a>
            </div>

        </section>
    );
}

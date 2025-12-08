import Image from "next/image";
import Link from "next/link";

export default function BentoGrid() {
    return (
        <section className="
            px-6
            md:px-10 
            lg:px-22 
            xl:px-44
        ">
            <h1 className="text-xl md:text-1xl lg:text-2xl xl:text-3xl py-4">
                EXPLORE & SHOP
            </h1>

            <div className="h-auto md:h-screen w-full flex items-center justify-center">
                <div
                    className="grid h-full w-full 
                    grid-cols-1 gap-3
                    md:grid-cols-4 md:grid-rows-10
                ">

                    {/* EXPLORE */}
                    <div className="relative md:col-span-4 md:row-span-3 h-40 md:h-auto">
                        <Link href="/products">
                            <Image
                                src="/explore.png"
                                alt="Explore"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute left-4 text-orange-400 text-2xl font-semibold drop-shadow-lg">
                                Explore
                            </div>
                        </Link>
                    </div>

                    {/* PANTS */}
                    <div className="relative md:col-span-1 md:row-span-3 h-40 md:h-auto">
                        <Link href="/products"> {/* mangler link */}

                            <Image
                                src="/ski.png"
                                alt="Bukser"
                                fill
                                className="object-cover"
                            />

                            <div className="absolute left-4 text-orange-400 text-2xl font-semibold drop-shadow-lg">
                                Skies
                            </div>
                        </Link>
                    </div>

                    {/* GOGGLES */}
                    <div className="relative md:col-span-3 md:row-span-3 h-40 md:h-auto">
                        <Link href="/products">
                            <Image
                                src="/googles.png"
                                alt="Goggles"
                                fill
                                className="object-cover object-[center_20%]"
                            />
                            <div className="absolute left-4 text-orange-400 text-2xl font-semibold drop-shadow-lg">
                                Goggles
                            </div>
                        </Link>
                    </div>

                    {/* JACKET */}
                    <div className="relative md:col-span-2 md:row-span-4 h-40 md:h-auto">
                        <Link href="/products">
                            <Image
                                src="/jacket.png"
                                alt="Jacket"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute left-4 text-orange-400 text-2xl font-semibold drop-shadow-lg">
                                Shell Jackets
                            </div>
                        </Link>
                    </div>

                    {/* MID LAYER */}
                    <div className="relative md:col-start-3 md:col-end-5 md:row-span-2 h-40 md:h-auto">
                        <Link href="/products"> {/* mangler link */}

                            <Image
                                src="/midtlayer.png"
                                alt="Mid Layer"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute left-4 text-orange-400 text-2xl font-semibold drop-shadow-lg">
                                Midlayers
                            </div>
                        </Link>
                    </div>

                    {/* BASE LAYER */}
                    <div className="relative md:col-start-3 md:col-end-5 md:row-span-2 h-40 md:h-auto">
                        <Link href="/products"> {/* mangler link */}

                            <Image
                                src="/baselayer.png"
                                alt="Base Layer"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute left-4 text-orange-400 text-2xl font-semibold drop-shadow-lg">
                                Baselayers
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

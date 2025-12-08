import Image from "next/image";
import Link from "next/link";

export default function BentoGrid() {
    return (
        <section className="
            px-6
            md:px-20 
            lg:px-32 
            xl:px-64
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
                                src="https://images.unsplash.com/photo-1488410766174-4d3ab8efd321?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Explore"
                                fill
                                className="object-cover"
                            />
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
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

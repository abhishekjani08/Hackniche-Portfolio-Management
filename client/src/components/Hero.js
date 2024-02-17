import React from 'react'

const Hero = () => {
    return (
        <div>
            <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="mb-8 flex flex-wrap justify-between md:mb-16">
                    <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                        <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Empower Your Wealth<br />Track Smartly!</h1>

                        <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg"> Easily manage your diverse portfolio, monitor real-time market data, and make informed decisions to optimize your financial goals. </p>
                    </div>

                    <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
                        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                            <img src="./images/StockImage1.jpg" loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
                        </div>

                        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                            <img src="./images/StockImage2.jpg" loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
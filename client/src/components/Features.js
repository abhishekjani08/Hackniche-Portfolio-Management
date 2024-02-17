import React from 'react'

const Features = () => {
    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12" id='features'>
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Features</h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">With intuitive features and comprehensive analytics, our system is designed to streamline your investment journey.</p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                        <div class="flex divide-x rounded-lg border bg-gray-50">
                            <div class="flex items-center p-2 text-indigo-500 md:p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div class="p-4 md:p-6">
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Historical Market Data Integration</h3>
                                <p class="text-gray-500">Display this data on an attractive dashboard where insights can be gleaned intuitively.</p>
                            </div>
                        </div>

                        <div class="flex divide-x rounded-lg border bg-gray-50">
                            <div class="flex items-center p-2 text-indigo-500 md:p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div class="p-4 md:p-6">
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Visualisation</h3>
                                <p class="text-gray-500">Experience interactive stock graphs, comparing individual security performance and portfolio against benchmarks, enhancing data visualization and aiding investment decisions.</p>
                            </div>
                        </div>

                        <div class="flex divide-x rounded-lg border bg-gray-50">
                            <div class="flex items-center p-2 text-indigo-500 md:p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div class="p-4 md:p-6">
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Real-time Market Alerts</h3>
                                <p class="text-gray-500">Stay informed with real-time market alerts, featuring relevant news articles and customizable risk parameters, while the dynamic portfolio rebalancing ensures diversified, well-maintained portfolios through automatic adjustments based on market conditions or predefined rules.</p>
                            </div>
                        </div>

                        {/* <div class="flex divide-x rounded-lg border bg-gray-50">
                            <div class="flex items-center p-2 text-indigo-500 md:p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div class="p-4 md:p-6">
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Speed</h3>
                                <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                            </div>
                        </div>

                        <div class="flex divide-x rounded-lg border bg-gray-50">
                            <div class="flex items-center p-2 text-indigo-500 md:p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div class="p-4 md:p-6">
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Support</h3>
                                <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                            </div>
                        </div>

                        <div class="flex divide-x rounded-lg border bg-gray-50">
                            <div class="flex items-center p-2 text-indigo-500 md:p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div class="p-4 md:p-6">
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Dark Mode</h3>
                                <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
// import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Landing = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            {/* <FAQ /> */}
            <CTA />
            <Footer />
        </div>
    )
}

export default Landing
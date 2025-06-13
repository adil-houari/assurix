import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Guarantees from '../components/Guarantees';
import TrustSection from '../components/TrustSection';
import PopularPlans from '../components/PopularPlans';
import SimulationCTA from '../components/SimulationCTA';
import SimulationSteps from '../components/SimulationSteps';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';








function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Guarantees />
            <SimulationCTA />
            <TrustSection />
            <PopularPlans />
            <SimulationSteps />
            <Testimonials />
            <FAQ />
            <Footer />

        </>
    );
}

export default Home;

import Footer from './Footer';
import Hero from './Hero';
import Skills from './Skills';
function Home() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <section>
                <Hero />
            </section>
            <section className=' bg-gray-800'>
                <Skills />
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
export default Home;

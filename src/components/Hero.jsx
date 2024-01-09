import heroImage from '/assets/banner.jpg';
export default function Hero() {
    return (
        <div
            className="bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${heroImage})` }} >
            <div className="text-center max-w-7xl mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Ну я Viva, і шо</h1>
                <p className="text-lg">
                    Псевдо програміст, недо хобі
                </p>
                <div className="text-center py-5">
                    <a href="#portfolio_section" >
                    </a>
                </div>
            </div>
        </div>
    )
}

import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
        <nav>
            <a>About</a>
            <Link to ="/LoginPage">Log In</Link>
        </nav>
        <h1>hey voyage!</h1>
        <h2>your perfect travel buddy</h2>
        <div className="carousel slide">
            <div className="carousel-indicators carousel-fade" data-bs-ride="carousel">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="1000">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" className="d-block w-100" alt="..."/>
                </div>
            </div>

        </div>

        <button>Get Started</button>
        </>

    );

}


export default LandingPage;
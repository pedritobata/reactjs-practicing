import Hero from "../components/Hero/Hero";
import { url } from "../shared/constants";


export default function Home() {
    
    return (
        <section>
            <Hero imageUrl={`${url.movieDBImages}/iDdpiUnCeXvBmrkBFpL6lKsZt33.jpg`} />
        </section>
    )
}

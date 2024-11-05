import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import Banner from "../Components/banner"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Gadget Heaven</title>
            </Helmet>
           <Hero />
            <div className="flex justify-center mb-[100px]">
            <Banner />
            </div>
           {/* products */}
            <Products />
        </div>
    );
};

export default Home;
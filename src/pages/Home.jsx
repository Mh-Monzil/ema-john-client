import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import TabCategories from "../components/TabCategories";


const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <Carousel />
            <TabCategories jobs={jobs} />
        </div>
    );
};

export default Home;
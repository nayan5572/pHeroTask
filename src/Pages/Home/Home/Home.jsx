import Banner from "../Banner/Banner";
import EducationCity from "../EducationCity/EducationCity";
import ExplorerCourse from "../ExplorerCourse/ExplorerCourse";
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
import OnlineClass from "../OnlineClass/OnlineClass";
import UniversitySlider from "../UniversitySlider/UniversitySlider";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <UniversitySlider></UniversitySlider>
            <OnlineClass></OnlineClass>
            <FeaturedCategory></FeaturedCategory>
            <ExplorerCourse></ExplorerCourse>
            <EducationCity></EducationCity>
        </div>
    );
};

export default Home;
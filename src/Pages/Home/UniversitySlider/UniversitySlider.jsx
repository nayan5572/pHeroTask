import img1 from '../../../assets/uni-1.jpg'
import img2 from '../../../assets/uni-2.jpg'
import img3 from '../../../assets/uni-3.jpg'
import img4 from '../../../assets/uni-4.jpg'
import img5 from '../../../assets/uni-5.jpg'
import img6 from '../../../assets/uni-6.jpg'
import Marquee from "react-fast-marquee";

const UniversitySlider = () => {
    return (
        <div className="flex">
            <p className='mt-8 text-3xl w-[22rem]'>Over 70+ University <br /> Courses in one place</p>
            <Marquee>
                <div className="">
                    <img src={img1} alt="" />
                </div>
                <div className="">
                    <img src={img2} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                </div>
                <div className="">
                    <img src={img4} alt="" />
                </div>
                <div className="">
                    <img src={img5} alt="" />
                </div>
                <div className="">
                    <img src={img6} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default UniversitySlider;
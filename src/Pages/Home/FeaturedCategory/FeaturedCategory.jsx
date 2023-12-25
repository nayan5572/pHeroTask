import { FaCode, FaHeartPulse, FaLeaf, FaList, FaLocationDot, FaRegImage, FaScissors } from "react-icons/fa6";
import { FaRegClone } from "react-icons/fa6";

const FeaturedCategory = () => {
    return (
        <div className="mt-12">
            <h1 className="text-center text-5xl my-11 border-b border-b-[#019FF8] pb-6">Featured Categories</h1>
            <div className=""></div>
            <div className="grid grid-cols-4 gap-10">
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaCode className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaCode></div>
                        <div className="font-bold">Development</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaRegClone className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaRegClone></div>
                        <div className="font-bold">Web Designing</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaLeaf className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaLeaf></div>
                        <div className="font-bold">Lifestyle</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaHeartPulse className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaHeartPulse></div>
                        <div className="font-bold">Health & Fitness</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaLocationDot className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaLocationDot></div>
                        <div className="font-bold">Gov. Exams</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaRegImage className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaRegImage></div>
                        <div className="font-bold">Photography</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaList className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaList></div>
                        <div className="font-bold">Finance & Accounting</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
                <div className="shadow hover:bg-[#019FF8] hover:text-white">
                    <div className="stat text-center hover:text-white">
                        <div className="stat-title"><FaScissors className="mx-auto text-6xl rounded-full bg-[#D9F3FF] p-4 text-[#019FF8]"></FaScissors></div>
                        <div className="font-bold">Office Productivity</div>
                        <div className="stat-desc text-[#FF8F00] font-bold">22 Courses</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategory;
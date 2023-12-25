import img1 from '../../../assets/about-img.png'
import { FaCheck } from "react-icons/fa6";

const EducationCity = () => {
    return (
        <div className='py-20'>
            <div className="flex w-full h-[700px] p-4 top-0 bg-[#FAFBFD]">
                <div className="grid h-20 flex-grow card rounded-box w-[17rem] space-y-5 pt-[120px] pl-2">
                    <h1 className='text-5xl'>We Have The Best Online Education in The City</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique</p>
                    <div className='mt-8 space-y-6'>
                        <div className='flex items-center'>
                            <FaCheck className='mr-4 bg-[#E2F3FC] w-10 rounded-full h-10 p-2 text-[#019FF8] text-3xl'></FaCheck><p>Full lifetime access</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheck className='mr-4 bg-[#E2F3FC] w-10 rounded-full h-10 p-2 text-[#019FF8] text-3xl'></FaCheck><p>Full lifetime access</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheck className='mr-4 bg-[#E2F3FC] w-10 rounded-full h-10 p-2 text-[#019FF8] text-3xl'></FaCheck><p>Full lifetime access</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheck className='mr-4 bg-[#E2F3FC] w-10 rounded-full h-10 p-2 text-[#019FF8] text-3xl'></FaCheck><p>Full lifetime access</p>
                        </div>
                    </div>
                    <button className='mt-8 bg-[#019FF8] px-4 py-2 rounded text-white'>Enrolled Today</button>
                </div>
                {/* <div className="divider-horizontal"></div> */}
                <div className="grid h-20 flex-grow card rounded-box place-items-center">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default EducationCity;
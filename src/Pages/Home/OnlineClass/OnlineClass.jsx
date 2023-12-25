import img1 from '../../../assets/onlineClass1.png'
import img2 from '../../../assets/onlineClass2.png'


const OnlineClass = () => {
    return (
        <div className="mt-12">
            <div className="flex w-full">
                <div className="grid flex-grow bg-[#D9F3FF] place-items-center rounded">
                    <div className='flex p-8'>
                        <div className='space-y-5'>
                            <span className="bg-pink-500 px-3 rounded py-1 text-white">Free</span>
                            <p className="text-3xl">Business Management Document</p>
                            <button className="bg-[#019FF8] px-2 py-2 rounded text-white">View Courses</button>
                        </div>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="divider-horizontal"></div>
                <div className="grid flex-grow bg-[#D9F3FF] place-items-center rounded">
                    <div className='flex p-8'>
                        <div className='space-y-5'>
                            <span className="bg-pink-500 px-3 rounded py-1 text-white">Free</span>
                            <p className="text-3xl">Online Courses From Edulearn University</p>
                            <button className="bg-[#019FF8] px-2 py-2 rounded text-white">Find Out More</button>
                        </div>
                        <div>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineClass;
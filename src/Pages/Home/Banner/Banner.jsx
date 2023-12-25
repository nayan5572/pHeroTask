

const Banner = () => {
    return (
        // <div className='relative'>
        //     <div className=''>
        //         <img className='' src={img1} alt="" />
        //     </div>
        //     {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div> */}
        //     <div className='absolute -mt-96 left-[30%] top-[50%] transform-translate font-bold'>
        //         <h2 className='text-center text-6xl'>Find Your Online Course</h2>
        //         <div className='flex mt-4'>
        //             <input className='p-2 w-full' type="text" placeholder="What do you want to learn today?" />
        //             <button className='bg-[#02d6f2] p-2 ml-2 text-white' type="submit">Search</button>
        //         </div>
        //     </div>
        // </div>
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zHBzz8K/school.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className='text-5xl'>Find Your Online Course</h2>
                    <div className='flex mt-4'>
                        <input className='p-2 w-full' type="text" placeholder="What do you want to learn today?" />
                        <button className='bg-[#02d6f2] p-2 ml-2 text-white' type="submit">Search</button>
                    </div>
                    <button className="btn btn-primary mt-8">Browse Course List</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;
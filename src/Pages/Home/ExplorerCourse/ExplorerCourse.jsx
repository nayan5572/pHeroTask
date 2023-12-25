import { useEffect, useState } from "react";
import ExplorerOutput from "./ExplorerOutput";




const ExplorerCourse = () => {
    const [explorer, setExplorer] = useState([]);

    useEffect(() => {
        fetch('featured.json')
            .then(res => res.json())
            .then(data => setExplorer(data))
    }, [])



    return (
        <div className="pt-[60px] text-center">
            <h1 className="text-5xl">Explore our Courses</h1>
            <div className="pt-8">
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li className="border rounded hover:bg-[#019FF8] text-[#0b1d22] hover:text-white"><a>All</a></li>
                        <li className="border rounded hover:bg-[#019FF8] text-[#0b1d22] hover:text-white"><a>Finance</a></li>
                        <li className="border rounded hover:bg-[#019FF8] text-[#0b1d22] hover:text-white"><a>Operations</a></li>
                        <li className="border rounded hover:bg-[#019FF8] text-[#0b1d22] hover:text-white"><a>Strategy & Leadership</a></li>
                        <li className="border rounded hover:bg-[#019FF8] text-[#0b1d22] hover:text-white"><a>Marketing</a></li>
                        <li className="border rounded hover:bg-[#019FF8] text-[#0b1d22] hover:text-white"><a>HR</a></li>
                        <li className="border rounded hover:bg-[#019FF8] text-[#0b1d22] hover:text-white"><a>Management</a></li>
                    </ul>
                </div>
                <div className="mt-12 sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-4 gap-6">
                    {
                        explorer.map(explorerData => <ExplorerOutput key={explorerData.id} explorerData={explorerData}></ExplorerOutput>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExplorerCourse;
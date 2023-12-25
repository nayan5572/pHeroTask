/* eslint-disable react/prop-types */

const ExplorerOutput = ({explorerData}) => {
    return (
        <div className="">
            <div className="card w-80 h-[500px] bg-base-100 shadow-xl">
                <figure><img src={explorerData.image} alt="Shoes" /></figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title">
                        {explorerData.title}
                    </h2>
                    <p className="text-left">{explorerData.description}</p>
                    <div className="card-actions">
                        <button className="hover:bg-[#019ff8] border border-[#019FF8] text-[#019FF8] px-4 py-1 btn-outline rounded hover:border-0">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorerOutput;
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='mt-32'>
            <h2 className="section-text text-center"><span className="text-[#499FCE]"> ~</span> Gallery<span className="text-[#499FCE]"> ~</span></h2>

            <div className="box page-background px-6 md:px-36 py-20">

                <div className="dream">
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g1.jpg' alt="" />
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g4.jpg' alt="" />
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g3.jpg' alt="" />
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g7.jpg' alt="" />
                </div>

                <div className="dream">
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g2.jpg' alt="" />
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g5.jpg' alt="" />
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g8.jpg' alt="" />
                </div>

                <div className="dream">
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g3.jpg' alt="" />
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g6.jpg' alt="" />
                    <img className='rounded shadow h-full mt-5' src='/assets/images/g9.jpg' alt="" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;
const MapLocation = () => {
    return (
<div className=''>
            <div className='flex  gap-20 xl:gap-10 flex-col xl:flex-row items-center justify-between'>
                <div className='flex-1 grid md:grid-cols-2 w-full xl:w-auto flex-col xl:flex-row items-center gap-10'>
                    <div className='col-span-1 space-y-5'>
                        <div className='p-3 md:p-5 border space-y-4 flex flex-col justify-between rounded-2xl'>
                            <h1 className='text-3xl play font-bold'>Daily</h1>
                            <span className='text-5xl text-center font-bold work text-[#65B110]'>+12</span>
                            <h1 className='text-right work text-xl font-medium'>Property Sale.</h1>
                        </div>
                        <div className='p-3 md:p-5 border rounded-2xl space-y-3'>
                            <h1 className='text-5xl work text-center font-bold text-[#65B110] '>95%</h1>
                            <h2 className='text-2xl work text-center font-semibold'>Positive Feedback.</h2>
                            <p className='work text-center text-base '>Encouraging remarks fostering growth and motivation.</p>
                        </div>
                        
                    </div>
                    <div className='col-span-1'>
                        <div className='p-3 md:p-5 border rounded-2xl space-y-3'>
                            <h1 className='text-5xl work text-center font-bold text-[#65B110]'>25k+</h1>
                            <h2 className='text-2xl work text-center font-semibold'>Social Connect.</h2>
                            <p className='work text-center text-base text-[#717171]'>Connecting people through social networking.</p>
                        </div>
                    </div>

                </div>
                <div className='flex-1'>
                    <div className='space-y-6 border-r-8 pr-4 border-[#65B110]'>
                       <div className='text-3xl lg:text-7xl font-bold work text-right'>
                            <h1>Your literary haven awaits.</h1>
                       </div>
                       <div className='text-right text-[#717171] work text-base'>
                        <p>Your premier destination for finding the perfect home. Explore a curated collection of properties tailored to your needs, backed by expert guidance every step of the way.</p>
                       </div>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default MapLocation;
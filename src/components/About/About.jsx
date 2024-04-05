import Slide1 from '../../assets/about-slide-1.png';
import ArrowIcon from "../../assets/icon-arrow.svg";
import SlideOrganization1 from '../../assets/about-slide-organization-1.png'

export const About = () => {
    return (
        <section id="about_us" className="bg-slate-200 py-20">
            <div className="px-16 border-[1px] border-red-400 container-section grid grid-rows-auto grid-cols-2 gap-5">
                <div className='flex flex-col items-start justify-center gap-10'>
                    <h1 className='text-slate-900 text-5xl font-bold font-lora tracking-normal'>What do we do?</h1>
                    <p className='text-xl text-balance tracking-wide font-poppins leading-8'>At AidManager, we're a dedicated team commited to making a possitive difference in
                        the world. By collaborating with charitable organizations and partners.</p>
                    <div className='flex flex-row gap-3items-center justify-center'>
                        <a
                            style={{ position: "relative" }}
                            href="/"
                            /* -underline effect- is a custom compoonent, go to index.css to see */
                            className="text-dark-green font-semibold text-xl inline-flex items-center 
                            gap-2 underline-effect after:bg-dark-green"
                        >
                            <div className='bg-green-900 p-1 rounded-full'>
                                <img className="w-4 h-4" src={ArrowIcon} />
                            </div>
                            More information
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-6 relative'>
                    <img className='w-full h-full' src={Slide1} />
                    <div className='flex flex-row items-center justify-center gap-4'>
                        <div className='cursor-pointer w-6 h-6 border-[1px] bg-slate-700 opacity-[.8] border-black rounded-full'></div>
                        <div className='cursor-pointer w-6 h-6 border-[1px] border-black rounded-full'></div>
                        <div className='cursor-pointer w-6 h-6 border-[1px] border-black rounded-full'></div>
                        <div className='cursor-pointer w-6 h-6 border-[1px] border-black rounded-full'></div>
                    </div>
                    <div className='w-40 h-40 flex items-center justify-center absolute bottom-0 right-0 -translate-y-12
                    bg-slate-100 rounded-full shadow-custom'>
                        <img src={ SlideOrganization1 } />
                    </div>
                </div>
            </div>
        </section>
    )
}

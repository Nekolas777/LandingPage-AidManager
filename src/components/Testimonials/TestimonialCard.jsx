
export const TestimonialCard = ({ name, review, position, profile }) => {
    return (
        <div className="bg-white overflow-hidden flex flex-col gap-7 p-7">
            <p className='text-lg text-balance font-normal font-lora tracking-wide'>
                { review }
            </p>
            <div className='flex flex-row gap-5 items-center justify-between'>
                <img className='w-20 h-20 rounded-full' src={profile} />
                <div className='flex flex-col justify-stretch items-start gap-1 flex-grow'>
                    <h3 className='font-semibold text-xl tracking-wide'>{ name }</h3>
                    <p className='font-normal text-slate-500 pr-0 lg:pr-12'>{ position }</p>
                </div>
            </div>
        </div>
    )
}



export const ServiceIcon = ({ icon }) => {
  return (
    <div className="bg-white border-[1px] rounded-full w-36 h-36 p-9 flex items-center justify-center">
      <img className="w-full h-full" src={icon} alt={ icon.toString() + '_image' } />
    </div>
  )
}


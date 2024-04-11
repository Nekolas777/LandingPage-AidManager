import milwaukeeLogo from '../../assets/milwaukee-logo.svg';
import compassLogo from '../../assets/compass-logo.svg';
import girlsLogo from '../../assets/girls-logo.svg';
import pacificLogo from '../../assets/pacific-logo.svg';
import unitedLogo from '../../assets/nekohub-logo.svg';

import { BrandLogo } from './BrandLogo';

import './BrandCarousel.css';

const logos = [milwaukeeLogo, compassLogo, unitedLogo, girlsLogo, pacificLogo];


export const BrandCarousel = () => {

  return (
    <section id="brands-carousel" className="bg-white py-20">
      <div className="container-section text-center font-lora">
        <p className='text-2xl font-medium leading-normal'><span className='text-secondary-dark font-bold'>Revolutionizing </span>
          the way NGO's<br />engage with donors and volunteers</p>
        <div className="scroller w-full mt-10">
          <ul className='scroller__inner to-left w-full flex flex-row justify-between items-center whitespace-nowrap gap-20'>
            {
              [...logos, ...logos].map((logo, index) =>
                <BrandLogo
                  key={index}
                  logo={logo}
                />
              )
            }
          </ul>
        </div>
        <div className="scroller w-full mb-10">
          <ul className='scroller__inner to-right w-full flex flex-row justify-between items-center whitespace-nowrap gap-20'>
            {
              [...logos, ...logos].map((logo, index) =>
                <BrandLogo
                  key={index}
                  logo={logo}
                />
              )
            }
          </ul>
        </div>
        <p className='text-2xl font-medium leading-normal'>Accelerated project completion<br />timelines by <span className='text-secondary-dark font-bold'>20%</span></p>
      </div>
    </section>
  )
}

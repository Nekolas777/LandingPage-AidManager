import { Button } from "../Button/Button"
import { ServiceIcon } from "./ServiceIcon"

import EspiralIcon from "../../assets/icon-espiral.svg"
import GraphicIcon from "../../assets/icon-graphic.svg"
import AnalyticsIcon from "../../assets/icon-analytics.svg"
import CircleIcon from "../../assets/icon-circle.svg"

const icons = [GraphicIcon, CircleIcon, EspiralIcon, AnalyticsIcon];

export const Service = () => {
    return (
        <section id="service" className="bg-secondary-light py-20">
            <div className="container-section font-lora grid grid-rows-custom md:grid-rows-1 
                grid-cols-1 md:grid-cols-2 gap-14 md:gap-0">
                <div className="px-0 lg:px-16 flex flex-col justify-center items-center
                    md:items-start text-center md:text-start gap-10">
                    <h1 className="text-black leading-normal md:leading-normal tracking-wide text-4xl md:text-5xl">
                        Transform your fundraising efforts with <span className="text-dark-green font-medium">precision analytics</span>
                    </h1>
                    <Button name="Know More" />
                </div>
                <div className="grid grid-rows-auto grid-cols-2 
                    place-items-center gap-5 md:gap-10 p-0 md:p-10">
                    {
                        icons.map((icon, index) => 
                            <ServiceIcon
                                key={ index }
                                icon={ icon }
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

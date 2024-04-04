import { Button } from "../Button/Button";
import './Hero.css';

export const Hero = () => {
    return (
        <section id="hero" className="w-full bg-slate-300">
            <div className="border-[1px] py-[260px] container-section font-poppins">
                <div className="relative z-50 flex flex-col items-center justify-center text-center gap-8">
                    <h1 className="text-white text-7xl font-sans font-semibold tracking-wide">
                        AidManager
                    </h1>
                    <p className="text-slate-100 font-sans font-light tracking-wide text-3xl leading-relaxed">
                        "Empowering Lives, Building Hope: Beneficient<br />Events that make a Difference"
                    </p>
                    <div className="flex flex-row gap-10 mt-4">
                        <Button name="Our Team" />
                        <Button name="Know More" />
                    </div>
                </div>
            </div>
        </section>
    )
}

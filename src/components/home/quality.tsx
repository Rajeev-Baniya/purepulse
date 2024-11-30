
import { FcInspection, FcBullish, FcPaid } from "react-icons/fc";
export default function Quality() {
    return (
        <div className="bg-black_extra">
            <section className="text-white common-padding_small flex items-center md:gap-[3.2rem] gap-[4.2rem] justify-between md:flex-nowrap flex-wrap">
                <div className="text-center flex flex-col items-center gap-[2.4rem]">
                    <div className="h-[6rem] w-[6rem] border border-primary rounded-[50%] flex justify-center items-center">
                        <FcInspection className="text-[3.2rem]" />
                    </div>
                    <h1 className="font-semibold text-[2.4rem]">100% Organic</h1>
                    <p className="px-3 text-grey">Pure Pulse is 100% organic. It is manufactured without using any chemicals.</p>
                </div>
                <div className="text-center flex flex-col items-center gap-[2.4rem]">
                    <div className="h-[6rem] w-[6rem] border border-secondary rounded-[50%] flex justify-center items-center">
                        <FcBullish className="text-[3.2rem]" />
                    </div>
                    <h1 className="font-semibold text-[2.4rem]">20+ Health Benefits</h1>
                    <p className="px-3 text-grey">Pure Pulse is proven to have more than 20 health benefits.</p>
                </div>
                <div className="text-center flex flex-col items-center gap-[2.4rem]">
                    <div className="h-[6rem] w-[6rem] border border-tertiary rounded-[50%] flex justify-center items-center">
                        <FcPaid className="text-[3.2rem]" />
                    </div>
                    <h1 className="font-semibold text-[2.4rem]">Affordable Price</h1>
                    <p className="px-3 text-grey">Despite having many health advantages, It has a affordable price.</p>
                </div>
            </section>
        </div>
    )
}
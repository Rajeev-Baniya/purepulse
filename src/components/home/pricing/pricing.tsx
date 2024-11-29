import Title from "../../common/title";
import PricingList from "./pricingList";

export default function Pricing() {
    return (
        <div className="common-padding_small bg-black_extra">
            <Title title="Pricing" paragraph="Checkout our pricing on different products" />
            <div className="mt-[5.4rem]">
                <PricingList />

            </div>

        </div>
    );
}
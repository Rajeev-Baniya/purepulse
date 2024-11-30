import Details from "@/components/home/details";
import MoreInfo from "@/components/home/moreinfo";
import Pricing from "@/components/home/pricing/pricing";
import Quality from "@/components/home/quality";
import Slider from "@/components/home/slider";
import Testimonial from "@/components/home/testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PurePulse",
  description: "Pure pulse is a premium dietary supplement crafted from a potent blend of nature&apos;s most revered herbs, including Yarsagumba, Shilajit, Ashwagandha, and Rhodiola Rosea. These herbs are known for their powerful adaptogenic, rejuvenating, and energy-boosting properties, offering a holistic approach to support your body&apos;s natural balance, vitality, and overall well-being",
  keywords: "PurePulse, Energy Booster, Made up of Herbs"
}

export default function Home() {
  return (
    <>
      <Slider />
      <Quality />
      <Details />
      <MoreInfo />
      <Pricing />
      <Testimonial />
    </>
  );
}

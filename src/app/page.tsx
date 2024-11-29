import Details from "@/components/home/details";
import Pricing from "@/components/home/pricing/pricing";
import Quality from "@/components/home/quality";
import Slider from "@/components/home/slider";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <>
      <Slider />
      <Quality />
      <Details />
      <Pricing />
      <Testimonial />
    </>
  );
}

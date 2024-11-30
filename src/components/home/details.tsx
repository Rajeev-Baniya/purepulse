import Image from "next/image";
import Button from "../ui/button";

export default function Details() {
    return (
        <div className="common-padding_small bg-black_extra">
            <div className="flex gap-14 items-center lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full">
                    <Image src="/PowerPulse.jpg" objectFit="cover" sizes="100vw" height={0} width={0}
                        alt="Madan Pokhrel" className=" lg:h-[52rem] h-[42rem] w-[100%] rounded-md object-cover " />
                </div>
                <div className="lg:w-1/2 w-full">
                    <h1 className="text-[3.4rem] mb-5 font-bold">History of Pure Pulse</h1>
                    <p className="text-gray-100 mb-7">Pure pulse is a premium dietary supplement crafted from a potent blend of nature&apos;s most revered herbs, including Yarsagumba, Shilajit, Ashwagandha, and Rhodiola Rosea. These herbs are known for their powerful adaptogenic, rejuvenating, and energy-boosting properties, offering a holistic approach to support your body&apos;s natural balance, vitality, and overall well-being.</p>
                    <p className="text-gray-100 mb-12">Each capsule is uniquely formulated to deliver maximum benefits through a liquid-filled design, ensuring faster absorption and more effective delivery of active ingredients. The outer oval-shaped capsule features a vibrant orange color, representing the natural potency inside. Inside, the oil-like consistency holds a concentrated blend of herbal extracts, providing you with a potent and bioavailable form of these traditional botanicals.</p>
                    <div className="flex gap-5 items-center">
                        <Button varient="secondary">Learn More</Button>
                        <Button varient="primary">Order Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
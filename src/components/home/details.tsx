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
                    <h1 className="text-[3.4rem] mb-5 font-bold">History of Power Pulse</h1>
                    <p className="text-gray-100 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum culpa debitis exercitationem consequuntur velit placeat ut facere modi asperiores temporibus alias, voluptates labore nisi earum quibusdam. Voluptatibus accusamus magni esse odit officia quis architecto quasi error porro. Inventore nesciunt excepturi neque soluta esse temporibus quam quos rerum repellendus dolor?</p>
                    <div className="flex gap-5 items-center">
                        <Button varient="secondary">Learn More</Button>
                        <Button varient="primary">Order Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
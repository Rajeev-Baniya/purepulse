

export default function MoreInfo() {
    return (
        <div className="common-padding_small bg-black_extra">
            <div className="flex gap-14 items-center lg:flex-row flex-col">
                <div className="lg:w-1/2 w-full">
                    <h1 className="text-[3.4rem] mb-5 font-bold">Ingredients used in Pure Pulse:</h1>
                    <ul className="list-disc" >
                        <li className="mb-3"> Yarsagumba (Cordyceps sinensis): Known for enhancing energy, stamina, and libido.</li>
                        <li className="mb-3">Shilajit: A mineral-rich resin that supports overall vitality, cognitive function, and immune health.</li>
                        <li className="mb-3">Ashwagandha: A powerful adaptogen for managing stress, reducing anxiety, and improving mental clarity.
                            Rhodiola Rosea: A well-known herb for boosting mood, reducing fatigue, and enhancing physical and mental performance.</li>
                    </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="mb-5">
                        <h1 className="text-[3.4rem] mb-5 font-bold">Usuage:</h1>
                        <ul className="list-disc">
                            <li>Take 1 capsule daily with water, preferably with a meal, to experience enhanced vitality, energy, and overall well-being.</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[3.4rem] mb-5 font-bold">Packaging</h1>
                        <ul className="list-disc">
                            <li>Each bottle contains 30 capsules designed for a 30-day supply of sustained wellness support.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
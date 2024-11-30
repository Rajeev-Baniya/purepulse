import { FaUmbrella, FaTree } from 'react-icons/fa';
import { MdDiamond } from 'react-icons/md';
import { GiHeartNecklace } from 'react-icons/gi';

export const pricing = [
    {
        id: 1,
        title: 'Premium',
        image:
            '/PowerPulse.jpg',
        price: '45,000',
        discount: "",
        discountedPrice: "",
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        active: false,
        icon: FaUmbrella,
    },
    {
        id: 2,
        title: 'Basic',
        image:
            '/PowerPulse.jpg',
        price: '30,000',

        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        active: true,
        icon: FaTree,
    },
    {
        id: 3,
        title: 'Herbal',
        image:
            '/PowerPulse.jpg',
        price: '40,000',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        active: false,
        icon: MdDiamond,
    },
    {
        id: 4,
        title: 'Standard',
        image:
            '/PowerPulse.jpg',
        price: '35,000',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        active: false,
        icon: GiHeartNecklace,
    },
];

export const testimonials = [
    {
        id: 1,
        image: '/testimonial1.jpg',
        testimonial:
            ' It has been my source of stamina. I am always in full strength after using it.',
        name: 'Kiran pandey',
    },
    {
        id: 2,
        image:
            '/drink.jpg',
        testimonial:
            'For better sleep and better day its the best source you can get',
        name: 'Alok Basnet',
    },
];
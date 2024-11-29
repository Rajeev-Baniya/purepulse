import { FaUmbrella, FaTree } from 'react-icons/fa';
import { MdDiamond } from 'react-icons/md';
import { GiHeartNecklace } from 'react-icons/gi';

export const pricing = [
    {
        id: 1,
        title: 'Premium',
        image:
            '/PowerPulse.jpg',
        price: '15,000',
        discount: "15%",
        discountedPrice: "12,000",
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
        price: '7,000',

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
        price: '11,000',
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
        price: '8,000',
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
            'I am using Power pulse for about a year. It has brought lots of positive changes in my health. Highly Recommended.',
        name: 'Sagar Chhetri',
    },
    {
        id: 2,
        image:
            '/drink.jpg',
        testimonial:
            'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.',
        name: 'Rajeev Baniya',
    },
    {
        id: 3,
        image:
            '/drink.jpg',
        testimonial:
            'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that do not yet have content.',
        name: 'John Doe',
    },
];
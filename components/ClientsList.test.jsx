import { render } from '@testing-library/react';
import ClientsList from './ClientsList';

it('renders correctly', () => {
    const clients = [
        {
            name: 'Ash Ketchum',
            title: 'Pokémon World Champion',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
            quote: 'I wanna be the very best.',
            nationality: 'Kantonian',
        },
        {
            name: 'Misty',
            title: 'Water Type Pokémon Trainer',
            avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Blank&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            quote: 'I am Misty, the tomboyish mermaid!',
            nationality: 'Kantonian',
        },
    ];

    const { container } = render(<ClientsList clients={clients} />);

    expect(container).toMatchSnapshot();
});

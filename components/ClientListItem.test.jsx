import { render } from '@testing-library/react';
import ClientListItem from './ClientListItem';

it('renders correctly', () => {
    const client = {
        name: 'Ash Ketchum',
        title: 'Pokémon World Champion',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
        quote: 'I wanna be the very best.',
        nationality: 'Kantonian',
    };

    const { container } = render(<ClientListItem client={client} />);

    expect(container).toMatchSnapshot();
});

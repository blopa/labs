import { render } from '@testing-library/react';
import ClientDetailsModal from './ClientDetailsModal';

it('renders correctly', () => {
    const onCloseModal = jest.fn();
    const client = {
        name: 'Ash Ketchum',
        title: 'Pokémon World Champion',
        avatar: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
        quote: 'I wanna be the very best.',
        nationality: 'Kantonian',
    };

    const { container } = render(
        <ClientDetailsModal handleClose={onCloseModal} client={client} show />
    );

    expect(container).toMatchSnapshot();
});

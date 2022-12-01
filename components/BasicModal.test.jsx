import { render } from '@testing-library/react';
import BasicModal from './BasicModal';

it('renders correctly', () => {
    const handleClose = jest.fn();
    const { container } = render(
        <BasicModal handleClose={handleClose} show>
            <p>Hello World</p>
        </BasicModal>
    );

    expect(container).toMatchSnapshot();
});

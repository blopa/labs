import { render } from '@testing-library/react';
import DebounceInput from './DebounceInput';

it('renders correctly', () => {
    const handleOnSearch = jest.fn();
    const { container } = render(<DebounceInput onSearch={handleOnSearch} />);

    expect(container).toMatchSnapshot();
});

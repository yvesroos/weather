import { renderWithProviders } from '../../tests/utils';

import { fireEvent } from '@testing-library/react';
import { placesTransformed } from '../../tests/fixtures';
import Search from './Search';

describe('Search', () => {
  it('should render', async () => {
    const { getByRole } = renderWithProviders(
      <Search onSelectItem={() => null} />
    );
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('should search by text', async () => {
    const { getByRole, findAllByRole } = renderWithProviders(
      <Search onSelectItem={() => null} />
    );
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    const items = await findAllByRole('listitem');
    expect(items).toHaveLength(5);
  });

  it('should search by text and click on first item', async () => {
    const onSelectItemFn = jest.fn();
    const { getByRole, findAllByRole } = renderWithProviders(
      <Search onSelectItem={onSelectItemFn} />
    );
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    const items = await findAllByRole('listitem');
    const firstOption = items[0];
    fireEvent.click(firstOption);
    expect(onSelectItemFn).toBeCalledWith(placesTransformed[0]);
  });
});

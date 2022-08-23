import { fireEvent, render, waitFor } from '@testing-library/react';
import SearchInput from './SearchInput';

const items = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 }
];

describe('SearchInput', () => {
  it('should render', async () => {
    const { getByRole, queryByRole } = render(
      <SearchInput onSearch={() => null} onSelectItem={() => null} />
    );
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(queryByRole('list')).not.toBeInTheDocument();
  });

  it('should search by text', async () => {
    const onSearchFn = jest.fn();
    const { getByRole } = render(
      <SearchInput onSearch={onSearchFn} onSelectItem={() => null} />
    );
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    await waitFor(() => {
      expect(onSearchFn).toBeCalledWith('test');
    });
  });

  it('should render options', async () => {
    const { getByRole, getAllByRole } = render(
      <SearchInput
        items={items}
        onSearch={() => null}
        onSelectItem={() => null}
      />
    );
    expect(getByRole('list')).toBeInTheDocument();
    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('should call onSelectItem when click on listitem', async () => {
    const onSelectItemFn = jest.fn();
    const { getByRole, getAllByRole } = render(
      <SearchInput
        items={items}
        onSearch={() => null}
        onSelectItem={onSelectItemFn}
      />
    );
    expect(getByRole('list')).toBeInTheDocument();
    const firstItem = items[0];
    const firstListitem = getAllByRole('listitem')[0];
    fireEvent.click(firstListitem);
    expect(onSelectItemFn).toBeCalledWith(firstItem);
  });
});

import { render } from '@testing-library/react';
import TemperatureLabel from './TemperatureLabel';

describe('TemperatureLabel', () => {
  it('should render "-" string', async () => {
    const { getByText } = render(<TemperatureLabel />);
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('°')).toBeInTheDocument();
  });

  it('should render rounded number', async () => {
    const { getByText } = render(<TemperatureLabel>51.2222</TemperatureLabel>);
    expect(getByText('51')).toBeInTheDocument();
    expect(getByText('°')).toBeInTheDocument();
  });

  it('should render rounded up number', async () => {
    const { getByText } = render(<TemperatureLabel>51.5555</TemperatureLabel>);
    expect(getByText('52')).toBeInTheDocument();
    expect(getByText('°')).toBeInTheDocument();
  });
});

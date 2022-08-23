import { fireEvent, render } from '@testing-library/react';
import { forecastTransformed } from '../../tests/fixtures/forecast';
import { weather } from '../../tests/fixtures/weather';
import WeatherCard from './WeatherCard';

describe('WeatherCard', () => {
  it('should render', async () => {
    const { getByText } = render(<WeatherCard />);
    expect(getByText('- / -')).toBeInTheDocument();
  });
  it('should render weather information', async () => {
    const { getByText } = render(<WeatherCard weather={weather} />);
    const roundTemperature = weather.main.temp.toFixed(0);
    expect(
      getByText(`${weather.name} / ${weather.sys.country}`)
    ).toBeInTheDocument();
    expect(getByText(roundTemperature)).toBeInTheDocument();
    expect(getByText(weather.weather[0].description)).toBeInTheDocument();
  });
  it('should render forecast information', async () => {
    const { getByText, getByLabelText } = render(
      <WeatherCard weather={weather} forecast={forecastTransformed} />
    );
    expect(getByText('Next 5 days')).toBeInTheDocument();
    forecastTransformed.list.forEach((forecastItem) => {
      const forecastDayElement = getByLabelText(
        `Forecast day ${forecastItem.dt_txt}`
      );
      expect(forecastDayElement).toBeInTheDocument();
    });
  });
  it('should call onClose when click on close button', async () => {
    const clickFn = jest.fn();
    const { getByLabelText } = render(<WeatherCard onClose={clickFn} />);
    const closeButton = getByLabelText(/close weather widget/i);
    fireEvent.click(closeButton);
    expect(clickFn).toHaveBeenCalled();
  });
});

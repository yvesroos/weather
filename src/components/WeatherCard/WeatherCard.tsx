import React from 'react';
import { formatDate } from '../../utils/date';
import Skeleton from '../Skeleton';
import {
  CloseButton,
  DividerLine,
  ForecastItem,
  SectionTitle,
  WeatherCardBody,
  WeatherCardContainer,
  WeatherCardDisclaimer,
  WeatherCardFooter,
  WeatherCardHeader,
  WeatherCardStatus,
} from './styled';
import TemperatureLabel from './TemperatureLabel';
import { WeatherCardProps } from './types';

const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  forecast,
  isLoading,
  error,
  onClose,
}) => {
  const hasForecastItems = isLoading || !!forecast?.list.length;
  return (
    <WeatherCardContainer>
      <WeatherCardHeader>
        <SectionTitle>
          {isLoading ? (
            <Skeleton width="250px" height="100%" />
          ) : (
            `${weather?.name ?? '-'} / ${weather?.sys.country ?? '-'}`
          )}
        </SectionTitle>
        {!isLoading && !!onClose && (
          <CloseButton onClick={onClose} aria-label="Close weather widget" />
        )}
      </WeatherCardHeader>
      <WeatherCardBody>
        <WeatherCardStatus>
          <div style={{ display: 'flex' }}>
            <h4>
              {isLoading ? (
                <Skeleton width="150px" height="100%" />
              ) : (
                <TemperatureLabel>{weather?.main.temp}</TemperatureLabel>
              )}
            </h4>
          </div>
          <h6>
            {isLoading ? (
              <Skeleton width="200px" height="100%" />
            ) : (
              weather?.weather[0].description ?? '-'
            )}
          </h6>
        </WeatherCardStatus>
      </WeatherCardBody>
      {hasForecastItems && (
        <>
          <DividerLine>Next 5 days</DividerLine>
          <WeatherCardFooter>
            {isLoading
              ? [...Array<undefined>(5)].map((_, index) => (
                  <ForecastItem key={`loading_forecast_${index}`}>
                    <h6>
                      <Skeleton width="100px" height="100%" />
                    </h6>
                    <h4>
                      <Skeleton width="60px" height="3rem" />
                    </h4>
                  </ForecastItem>
                ))
              : forecast?.list.map((item) => (
                  <ForecastItem
                    key={item!.dt_txt}
                    aria-label={`Forecast day ${item!.dt_txt}`}
                  >
                    <h6>{formatDate(item!.dt_txt)}</h6>
                    <h4>
                      <TemperatureLabel>{item?.main.temp}</TemperatureLabel>
                    </h4>
                  </ForecastItem>
                ))}
          </WeatherCardFooter>
        </>
      )}
      {!!error && <WeatherCardDisclaimer>{error}</WeatherCardDisclaimer>}
    </WeatherCardContainer>
  );
};

export default WeatherCard;

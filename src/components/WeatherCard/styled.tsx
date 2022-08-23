import styled from 'styled-components';

export const WeatherCardContainer = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
`;
export const WeatherCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SectionTitle = styled.h6`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.secondaryColor};
`;
export const WeatherCardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
`;
export const WeatherCardStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 25rem;
  @media (max-width: 800px) {
    margin: 2rem 0rem;
  }
  h4 {
    font-weight: 200;
    font-size: 7rem;
    color: ${({ theme }) => theme.secondaryColor};
    line-height: 1;
    sup {
      line-height: 0;
    }
  }
  h6 {
    font-size: 1.375rem;
    text-align: left;
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const DividerLine = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  color: ${({ theme }) => theme.greyColor};
  ::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.greyColor};
  }
  :not(:empty)::after {
    margin-left: 0.5rem;
  }
`;

export const WeatherCardFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;
`;

export const WeatherCardDisclaimer = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.mainColor};
  font-size: 0.75rem;
  font-weight: 900;
  padding: 1rem;
  margin-top: 1rem;
`;

export const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  h4 {
    font-weight: 200;
    font-size: 2rem;
    color: ${({ theme }) => theme.greyColor};
    line-height: 1;
    sup {
      line-height: 0;
    }
  }
  h6 {
    font-size: 0.85rem;
    text-align: left;
    color: ${({ theme }) => theme.greyColor};
    margin-bottom: 0.5rem;
  }
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  opacity: 0.5;
  position: relative;
  border: 0;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.secondaryColor};
  :hover {
    opacity: 1;
  }
  ::before,
  ::after {
    position: absolute;
    left: 14px;
    top: 0px;
    content: ' ';
    height: 32px;
    width: 2px;
    background-color: ${({ theme }) => theme.secondaryColor};
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;

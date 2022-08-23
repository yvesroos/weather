const TemperatureLabel = ({ children }: { children?: string | number }) => (
  <>
    {children !== undefined ? parseFloat(String(children)).toFixed(0) : '-'}
    <sup>&deg;</sup>
  </>
);

export default TemperatureLabel;

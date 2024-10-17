import React from 'react';

const ClimaView = (props) => {
  const { data } = props;
  // Pointer para o local com os dados
  const previsao = {
    events: {
      sunrise: '08:00',
      sunset: '18:00',
    },
    temperature: {
      hourly: [],
      now: 29.1,
    },
    weather: 'sun',
  };
  const events = previsao?.events;
  const sunrise = events?.sunrise ? events.sunrise : '';
  const sunset = events?.sunset ? events.sunset : '';
  const temperature = previsao?.temperature ? previsao.temperature.now : '';
  const weather = previsao?.weather ? previsao.weather : 'cloud';
  const measure = data?.measure ? data.measure : '';
  const location = data?.location ? data.location : 'Terra';

  return (
    <div className={'block climaBlock'}>
      <div className={'clima-wrapper'}>
        <div className={'clima-card'}>
          <div className={`clima-icon ${weather}`}></div>
          <h1>{temperature}º</h1>
          <p className={'local'}>{location}</p>
          <p className={`evento ${measure}`}>
            {measure === 'sunrise' ? (
              <span>{sunrise}</span>
            ) : (
              <span>{sunset}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClimaView;

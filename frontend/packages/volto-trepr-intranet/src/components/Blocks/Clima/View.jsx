import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClimaData } from '../../../actions/Clima/Clima';

const ClimaView = (props) => {
  const { data } = props;
  // Pointer para o local com os dados
  const loaded = useSelector((state) => state.climaData?.loaded || false);
  const previsao = useSelector((state) => state.climaData?.data || {});
  const events = previsao?.events;
  const sunrise = events?.sunrise ? events.sunrise : '';
  const sunset = events?.sunset ? events.sunset : '';
  const temperature = previsao?.temperature ? previsao.temperature.now : '';
  const weather = previsao?.weather ? previsao.weather : 'cloud';
  const measure = data?.measure ? data.measure : '';
  const location = data?.location ? data.location : 'Terra';

  const dispatch = useDispatch();
  //Busca os dados quando o bloco é rederizado
  useEffect(() => {
    dispatch(getClimaData(location));
  }, [dispatch, location]);

  return (
    <div className={'block climaBlock'}>
      <div className={'clima-wrapper'}>
        {loaded ? (
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
        ) : (
          <div className={'loading'}>{'Please wait'}</div>
        )}
      </div>
    </div>
  );
};

export default ClimaView;

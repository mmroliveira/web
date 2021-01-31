import React, { useEffect, useState, useRef } from 'react';

import { ResponsiveBarCanvas } from '@nivo/bar';

import axios from 'axios';
import styled from 'styled-components';

import { exportComponentAsPNG } from 'react-component-export-image';

const LIGHT_GREY = 'hsl(355, 20%, 90%)';

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ChartView = styled.div`
  width: 500px;
  height: 300px;

  background-color: #121214;
`;

const Tooltip = styled.div``;

const MyResponsiveBarCanvas = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const componentRef = useRef<any>(null);

  useEffect(() => {
    async function getData() {
      const respose = await axios.get('/api/abastecimento');

      setData(respose.data.data);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      {loading ? (
        <h1>E ae ta carregando pow </h1>
      ) : (
        <>
          <ChartView ref={componentRef}>
            <ResponsiveBarCanvas
              data={data}
              indexBy="plate"
              enableLabel={false}
              margin={{ top: 0, right: 0, bottom: 70, left: 60 }}
              padding={0.3}
              colors={{ scheme: 'spectral' }}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisBottom={{
                tickSize: 8,
                tickPadding: 5,
                tickRotation: -90,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,

                format: (value) =>
                  `${Number(value).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })} `,
              }}
              // animate={true}
              tooltip={(input) => {
                console.log(input);
                let plate = input.data.plate;
                let value = input.data.value;
                let newValue = value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                });
                return <Tooltip>{`${plate} \n ${newValue}`}</Tooltip>;
              }}
              theme={{
                textColor: LIGHT_GREY,
                tooltip: {
                  container: {
                    background: '#333',
                    borderRadius: '8px',
                    border: '2px solid #9e0142',
                  },
                },
              }}
            />
          </ChartView>

          <ChartView>
            <ResponsiveBarCanvas
              data={data}
              indexBy="plate"
              enableLabel={false}
              margin={{ top: 0, right: 0, bottom: 70, left: 60 }}
              padding={0.3}
              colors={{ scheme: 'spectral' }}
              borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
              axisBottom={{
                tickSize: 8,
                tickPadding: 5,
                tickRotation: -90,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,

                format: (value) =>
                  `${Number(value).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })} `,
              }}
              // animate={true}
              tooltip={(input) => {
                console.log(input);
                let plate = input.data.plate;
                let value = input.data.value;
                let newValue = value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                });
                return <Tooltip>{`${plate} \n ${newValue}`}</Tooltip>;
              }}
              theme={{
                textColor: LIGHT_GREY,
                tooltip: {
                  container: {
                    background: '#333',
                    borderRadius: '8px',
                    border: '2px solid #9e0142',
                  },
                },
              }}
            />
          </ChartView>
        </>
      )}
    </Container>
  );
};

export default MyResponsiveBarCanvas;

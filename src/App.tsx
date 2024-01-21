import React, { FC, useEffect, useRef, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { Button, Divider, Space, Typography } from 'antd';
import InputNumber from './components/InputNumber';

import { SelectValueType } from './types/currency';
import Select from './components/Select';
import GlobalStyles from './global-styles';

const { Text, Title } = Typography;


const App: FC = () => {
  const [fromValue, setFromValue] = useState<number>(1);

  const [currencyPair, setCurrencyPair] = useState<SelectValueType>(['ETH', 'BTC'])

  const [toValue, setToValue] = useState<number>(fromValue);

  const [reverseCurr, setReverseCurr] = useState<boolean>(false);


  const changeCurrency = () => {
    setFromValue(toValue);
    setToValue(fromValue)
    setCurrencyPair(prev => [...prev].reverse())
    setReverseCurr(true)
  }

  useEffect(() => {
    // не вызывать эффект при изменение местами и одинаковых парах
    if (!reverseCurr && !currencyPair.every(v => v == currencyPair[0])) {
      console.log('useEffect')
    }
    setReverseCurr(true)
  }, [fromValue, toValue, reverseCurr])

  return (
    <>
      <div className="container">
        <Title>Ant Design converter</Title>
        <Space direction="horizontal">
          <InputNumber eventHandler={(e: number) => {
            setFromValue(prev => e ? e : 1)
            setReverseCurr(false);
          }
          } addonAfter={<Select eventHandler={val => {
            setCurrencyPair(prev => [val, prev[1]])
            setReverseCurr(prev => false);
          }} value={currencyPair[0]} />} value={fromValue} />

          <Button icon={<FaExchangeAlt />} onClick={() => changeCurrency()} />

          <InputNumber eventHandler={(e: number) => {
            setToValue(prev => e ? e : 1)
            setReverseCurr(false);
          }
          } addonAfter={<Select eventHandler={val => {
            setCurrencyPair(prev => [prev[0], val]);
            setReverseCurr(prev => false);
          }} value={currencyPair[1]} />} value={toValue} />
        </Space >
        <Divider />
        <Text>{`${fromValue} ${currencyPair[0]} = ${toValue} ${currencyPair[1]}`}</Text>
        <Text type="secondary">Данные представлены на {new Date().toLocaleString()}</Text>
      </div>
      <GlobalStyles />
    </>


  )

}

export default App;

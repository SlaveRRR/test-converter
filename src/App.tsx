import React, { FC, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { Button, Divider, Space, Typography } from 'antd';
import InputNumber from './components/InputNumber';

import { SelectValueType } from './types/currency';
import Select from './components/Select';
import GlobalStyles from './global-styles';

const { Text, Title } = Typography;


const App: FC = () => {
  const [fromValue, setFromValue] = useState<number>(1);
  const [currency, setCurrency] = useState<SelectValueType>(['ETH', 'BTC'])
  const [toValue, setToValue] = useState<number>(fromValue);

  const changeCurrency = () => {
    setFromValue(toValue);
    setToValue(fromValue)
    setCurrency(prev => [...prev].reverse())
  }
  return (
    <>
      <div className="container">
        <Title>Ant Design converter</Title>
        <Space direction="horizontal">
          <InputNumber eventHandler={(e: number) => setFromValue(e)} addonAfter={<Select eventHandler={val => setCurrency(prev => [val, prev[1]])} value={currency[0]} />} value={fromValue} />

          <Button icon={<FaExchangeAlt />} onClick={() => changeCurrency()} />

          <InputNumber addonAfter={<Select eventHandler={val => setCurrency(prev => [prev[0], val])} value={currency[1]} />} value={toValue} />
        </Space >
        <Divider />
        <Text type="secondary">Данные представлены на {new Date().toLocaleString()}</Text>
      </div>
      <GlobalStyles />
    </>


  )

}

export default App;

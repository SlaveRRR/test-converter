import React, { FC, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { Button, Space } from 'antd';
import InputNumber from './components/InputNumber';

import { SelectValueType } from './types/currency';
import Select from './components/Select';




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
    <Space direction="horizontal">
      <InputNumber eventHandler={(e: number) => setFromValue(e)} addonAfter={<Select eventHandler={val => setCurrency(prev => [val, prev[1]])} value={currency[0]} />} value={fromValue} />

      <Button icon={<FaExchangeAlt />} onClick={() => changeCurrency()} />

      <InputNumber addonAfter={<Select eventHandler={val => setCurrency(prev => [prev[0], val])} value={currency[1]} />} value={toValue} />
    </Space >
  )

}

export default App;

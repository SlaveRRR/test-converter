import React, { FC } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { InputNumber as antdInputNumber, Button, Select, Space } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const InputNumber = styled(antdInputNumber)`
  & .ant-input-number-input{
    text-align:end;
  }
`


const selectAfter = (
  <Select defaultValue="USD" style={{ width: 60 }}>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

const App: FC = () => {
 
  return (
    <Space direction="horizontal" >
      <InputNumber addonAfter={selectAfter} defaultValue={100} />
      <Button icon={<FaExchangeAlt />} />
      <InputNumber addonAfter={selectAfter} defaultValue={100} />
    </Space >
  )

}

export default App;
import React, { FC } from 'react'
import { InputNumber as antdInputNumber } from 'antd';
import styled from 'styled-components';

const StyledInputNumber = styled(antdInputNumber)`
  & .ant-input-number-input{
    text-align:center;
  }
`

type Props = {
    addonAfter: React.ReactNode;
    value: number;
    eventHandler?: (e: number) => void;
}

const InputNumber: FC<Props> = ({ addonAfter, value, eventHandler }) => {
    return <StyledInputNumber value={value} onChange={eventHandler} addonAfter={addonAfter}  />
}

export default InputNumber
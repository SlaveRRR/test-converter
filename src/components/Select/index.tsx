import React, { FC } from 'react'
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { SiTether } from "react-icons/si";
import { Select as AntdSelect } from 'antd';
import { CurrencyType, SelectValueType } from '../../types/currency';
import styled from 'styled-components';

const { Option } = AntdSelect;

const IconContainer = styled.div`
    display: flex;
`

type Props = {
    eventHandler: (value: CurrencyType) => void;
    value: CurrencyType;
}

const Select: FC<Props> = ({ eventHandler, value }) => {
    return (
        <AntdSelect onChange={eventHandler} value={value} style={{ width: 60 }}>

            <Option value="ETH">
                <IconContext.Provider value={{ color: '#4a4b8f', size: '18px' }}>
                    <IconContainer> <FaEthereum /></IconContainer>
                </IconContext.Provider>
            </Option>

            <Option value="USDT">
                <IconContext.Provider value={{ color: 'green', size: '18px' }}>
                    <IconContainer><SiTether /></IconContainer>
                </IconContext.Provider>
            </Option>

            <Option value="BTC">
                <IconContext.Provider value={{ color: 'orange', size: '18px' }}>
                    <IconContainer><FaBitcoin /></IconContainer>
                </IconContext.Provider>
            </Option>

        </AntdSelect>
    )
}

export default Select
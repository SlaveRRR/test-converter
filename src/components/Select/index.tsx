import React, { FC } from 'react'
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import { Select as AntdSelect } from 'antd';
import { CurrencyType,SelectValueType } from '../../types/currency';

const { Option } = AntdSelect;

type Props = {
    eventHandler: (value: CurrencyType) => void;
    value: CurrencyType;
}

const Select: FC<Props> = ({ eventHandler, value }) => {
    return (
        <AntdSelect onChange={eventHandler} value={value} style={{ width: 60 }}>
            <Option value="ETH"><FaEthereum /></Option>
            <Option value="USDT"><SiTether /></Option>
            <Option value="BTC"><FaBitcoin /></Option>
        </AntdSelect>
    )
}

export default Select
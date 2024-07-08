import { InputNumber as antdInputNumber } from "antd";
import styled from "styled-components";

interface IProps {
   currency: "ETH" | "USDT" | "BTC";
}

const colorObj = {
   ETH: "#9932CC",
   USDT: "#008000",
   BTC: "#FFA500",
};

export const StyledInputNumber = styled(antdInputNumber)<IProps>`
   & .ant-input-number-input {
      text-align: center;
      color: ${({ currency }) => colorObj[currency]};
   }
   & .ant-input-number-group-addon {
      background-color: #f7f7f7;
   }
`;

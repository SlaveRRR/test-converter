import React, { FC } from "react";
import { StyledInputNumber } from "./styles";

type Props = {
   addonAfter: React.ReactNode;
   value: number;
   eventHandler?: (e: number) => void;
   currency: "ETH" | "USDT" | "BTC";
};

const InputNumber: FC<Props> = ({ addonAfter, value, eventHandler, currency }) => {
   return (
      <StyledInputNumber
         currency={currency}
         inputMode="decimal"
         min={0}
         value={value}
         onChange={eventHandler}
         addonAfter={addonAfter}
      />
   );
};

export default InputNumber;

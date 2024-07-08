import { FC, useEffect, useState } from "react";
import axios from "axios";
import { FaExchangeAlt } from "react-icons/fa";
import InputNumber from "./components/InputNumber";
import Select from "./components/Select";
import { CurrencyResponse, CurrencyType } from "./types/currency";
import { Space, Divider, Text, Title, Button, AccentText } from "./styles";
import GlobalStyles from "./global-styles";

const apiUrl = "https://rest.coinapi.io/v1/exchangerate/";

const App: FC = () => {
   const [fromValue, setFromValue] = useState<number>(1);

   const [fromCurr, setFromCurr] = useState<CurrencyType>("ETH");

   const [toCurr, setToCurr] = useState<CurrencyType>("BTC");

   const [toValue, setToValue] = useState<number>(fromValue);

   const [reverseCurr, setReverseCurr] = useState<boolean>(false);

   const [price, setPrice] = useState<number>(1);

   const changeCurrency = () => {
      setFromValue(toValue);
      setToValue(fromValue);

      setFromCurr(toCurr);
      setToCurr(fromCurr);

      setReverseCurr((prev) => true);

      setPrice((prev) => Number((1 / prev).toFixed(6)));
   };

   const getCurrencyData = async (from: CurrencyType, to: CurrencyType): Promise<number> => {
      // в env файл вставил чисто для примера, сам никогда не кидаю ключи в публичный репозиторий
      try {
         const response = await axios.get<CurrencyResponse>(`${apiUrl}${from}/${to}`, {
            headers: {
               "X-CoinAPI-Key": import.meta.env.VITE_KEY,
               Accept: "application/json",
            },
         });

         const {
            data: { rate },
            status,
            statusText,
         } = response;

         if (status !== 200) {
            throw new Error(statusText);
         }

         return rate;
      } catch (error) {
         alert(error);
         return 1;
      }
   };

   const onChangeFromValue = (eventValue: number) => {
      setFromValue(eventValue || 1);

      const to = eventValue ? eventValue * price : price;

      setToValue(Number(to.toFixed(6)));

      setReverseCurr(false);
   };

   const onChangeToValue = (eventValue: number) => {
      setToValue(eventValue || 1);

      const from = eventValue ? eventValue / price : 1 / price;

      setFromValue(Number(from.toFixed(6)));

      setReverseCurr(false);
   };

   //  перезапрос на каждое изменение валюты
   useEffect(() => {
      // не вызывать эффект при изменение местами и одинаковых парах
      if (fromCurr === toCurr) {
         setToValue(fromValue);
         return;
      }

      if (!reverseCurr) {
         getCurrencyData(fromCurr, toCurr).then((rate) => {
            setPrice(rate);
            setToValue(Number((fromValue * rate).toFixed(6)));
         });
      }
   }, [fromCurr, toCurr]);

   return (
      <>
         <div className="container">
            <Title>Ant Design converter</Title>
            <Space direction="horizontal" align="start">
               <InputNumber
                  currency={fromCurr}
                  eventHandler={onChangeFromValue}
                  addonAfter={
                     <Select
                        eventHandler={(val) => {
                           setFromCurr(val);
                           setReverseCurr(false);
                        }}
                        value={fromCurr}
                     />
                  }
                  value={fromValue}
               />

               <Button icon={<FaExchangeAlt />} onClick={() => changeCurrency()} />

               <InputNumber
                  currency={toCurr}
                  eventHandler={onChangeToValue}
                  addonAfter={
                     <Select
                        eventHandler={(val) => {
                           setToCurr(val);
                           setReverseCurr(false);
                        }}
                        value={toCurr}
                     />
                  }
                  value={toValue}
               />
            </Space>

            <Divider />

            <AccentText>{`${fromValue} ${fromCurr} = ${toValue} ${toCurr}`}</AccentText>
            <Text type="secondary">Данные представлены на {new Date().toLocaleString()}</Text>
         </div>
         <GlobalStyles />
      </>
   );
};

export default App;

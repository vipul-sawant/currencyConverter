import { useState } from 'react';
import './App.css';
import { InputBox } from './Components/index';
// import './Components/index.js';
import useCurrencyInfo from './hooks/useCurrencyInfo.hook';
// import useCurrencyInfo from "./hooks/useCurrencyInfo.hook";

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    const output = amount * currencyInfo[to]
    setConvertedAmount(output.toFixed(2))
    // setConvertedAmount(amount * currencyInfo[to]);
  };

  // const BackgroundImage = "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600";
  const BackgroundImage = "https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg";
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount = {amount}
                            onAmountChange={
                              (amount) => {
                               setAmount(amount)
                              }}
                            onCurrencyChange = {
                              (currency) => {
                                setFrom(currency);
                            }}
                            currencyOptions = {options}
                            selectCurrency = {from}
                            amountDisable = {false}
                            currencyDisable = {false}
                            className={""}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount = {convertedAmount}
                            onAmountChange={
                              (amount) => {
                                // setcAmount(amount)
                                setConvertedAmount(amount)
                              }}
                            onCurrencyChange = {
                              (currency) => {
                              setTo(currency);
                            }}
                            currencyOptions = {options}
                            selectCurrency = {to}
                            amountDisable = {false}
                            currencyDisable = {false}
                            className={""}
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import {useState, useEffect} from "react";

import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent";
import DataContext from "./Data/DataContext";
import ReportComponent from "./component/ReportComponent";
import {element} from "prop-types";

const Title = () => (
  <h1 style={{color: "red", textAlign: "center", fontSize: "1.5rem"}}>
    {" "}
    โปรแกรมบัญชีรายรับ - รายจ่าย{" "}
  </h1>
);

function App() {
  const initData = [
    {id: 1, title: "เงินเดือน", amount: 20000},
    {id: 2, title: "ค่าเช่าบ้าน", amount: -2000},
    {id: 3, title: "ค่าน้ำมัน", amount: -1000},
  ];
  const [items, setItems] = useState(initData);
  const [reportIncome, setreportIncome] = useState(0);
  const [reportExpense, setreportExpense] = useState(0);

  const onAddnewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    // console.log(amounts);
    const income = amounts.filter((element) => element > 0);
    console.log("รายได้ :", income);
  }, [items]);
  return (
    <DataContext.Provider
      value={{
        income: 50000,
        expense: -8000,
      }}>
      <div className="container">
        <Title />
        <FormComponent onAdditem={onAddnewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;

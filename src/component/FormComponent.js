import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './FormComponent.css'
const FormComponent = (props) => {


    const [title,setTitle]= useState('')
    const [amount, setAmount]= useState(0)

    const inputTitle =(event)=>{
        setTitle(event.target.value);
    }  
    const inputAmount =(event)=>{
        setAmount(event.target.value);
    }
    const saveItem = (event)=>{
        event.preventDefault();
        console.log('save success')

        const itemData ={
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }

        props.onAdditem(itemData)
        setTitle('')
        setAmount(0)
    }
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input type="number" placeholder="ระบุชื่อจำนวนเงินของคุณ" onChange={inputAmount} value={amount}/>
        </div>
        <div>
            <button type="submit" className="btn">เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;

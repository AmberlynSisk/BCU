import React, {useState} from 'react';
import axios from 'axios';

export default function AddTransaction(props) {
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('')

    const handleSubmit = () => {
        axios
            .post("http://127.0.0.1:5000/transactions/add", 
            {
                date,
                description,
                category,
                amount,
                type
            }
            ).then(response => {
                console.log("Success", response);
              })
              .catch(error => {
                console.log("error", error);
              });
    }

    return (
        <form className="add-transaction-wrapper" onSubmit={handleSubmit}>
            <h1 className="add-transaction-title">
                ADD A TRANSACTION:
            </h1>
            <div className="add-transaction-form">
                <input className="transaction-input" type='date' placeholder='date' value={date} onChange={(e) => setDate(e.target.value)} />
                <input className="transaction-input" type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <select className="transaction-input" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="null">Category</option>
                    <option value="income">Income</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="utilities">Utilities</option>
                    <option value="housing">Housing</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="food">Food</option>
                    <option value="gas">Gas</option>
                    <option value="misc">Misc.</option>
                </select>
                <input className="transaction-input" type='number' placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select className="transaction-input" placeholder="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="null">Type</option>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                </select>
            
                <button type="submit">Add</button>
            </div>
        </form>
    );
}
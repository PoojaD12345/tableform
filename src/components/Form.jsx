import React, { useState } from 'react'
// import Table from './Table';
// import data from '../data.json'
// import {nanoid} from 'nanoid';

const Form = ({getData}) => {
    const [form,setForm]=useState(null)
    const handOnChange=(e)=>{
        let {name,value,type,checked,files}=e.target;
        if(type==="checkbox"){
            setForm({
                ...form,
                [name]:checked,
            })
        }
        else if(type==="file"){
            setForm({
                ...form,
                [name]:files,
            })
        }
        else{
            setForm({
                ...form,
                [name]:value,
            }) 
        }
    }

    const handOnSubmit=(e)=>{
        e.preventDefault();
        getData(form)
        console.log(form);
    }
  return (
      <>
    <div>Form
        <form onSubmit={handOnSubmit}>
            <div>
            <label>Name:</label>
            <input  type="text" placeholder='Enter Name' name="name" onChange={handOnChange}/>
            </div>

            <div>
            <label>Age:</label>
            <input type="number" placeholder='Enter Age'  name="age" onChange={handOnChange}/>
            </div>

            <div>
            <label>Address:</label>
            <input type="text" placeholder='Enter Address'name="address" onChange={handOnChange}/>
            </div>

            <div>
            <label>Departement:</label>
            <select name='depart' onChange={handOnChange}>
                <option value=""></option>
                <option value="Sales">Sales Depart</option>
                <option value="Operation">Operation Depart</option>
                <option value="Finance">Finance Depart</option>
                <option value="Marketing">Marketing Depart</option>
            </select>
            </div>

            <div>
            <label>Salary:</label>
            <input type="number" placeholder='Enter salary'name="salary"onChange={handOnChange}/>
            </div>

            <div>
            <label>marital state:</label>
            <input type="checkbox" onChange={handOnChange} name="state"/>
            </div>

            <div>
            <label>profile photo:</label>
            <input type="file"name="resume"onChange={handOnChange}/>
            </div>

            <button type="submit">Submit</button>
        </form>
       
    </div>
    </>
  )
}

export default Form
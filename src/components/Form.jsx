import React, { useRef, useState } from 'react'
// import Table from './Table';
import data from '../data.json'
import {nanoid} from 'nanoid';

const Form = () => {
    const [form,setForm]=useState({
      name:"",
      age:"",
      address:"",
      depart:"",
      salary:"",
      state:false,
    })
    const [contacts,setContacts]=useState(data);
    const ref=useRef();
    const passref=useRef()


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
        e.preventDefault()

        const newContact={
            id:nanoid(),
            name:form.name,
            age:form.age,
            address:form.address,
            depart:form.depart,
            salary:form.salary,
            state:form.state,
        }
    const newContacts=[...contacts,newContact];
    setContacts(newContacts);

       if(!form.name)ref.current.focus()
        else if(!form.address)passref.current.focus();
    }
  return (
      <>
      <div>
        <table>
          <thead>
          <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Departement</th>
                <th>Salary</th>
                <th>Marital state</th>
                <th>Profile</th>
                <th>Remove</th>
            </tr>
          </thead>
          <tbody>
              {contacts.map((contact)=>(
                   <tr>
                   <td>{contact.name}</td>
                   <td>{contact.age}</td>
                   <td>{contact.address}</td>
                   <td>{contact.depart}</td>
                   <td>{contact.salary}</td>
                   <td>{contact.state}</td>
               </tr>
              ))}
         
          </tbody>
        </table> 
    </div>
      <>
    <div>Form
        <form onSubmit={handOnSubmit}>
            <div>
            <label>Name:</label>
            <input ref={ref} type="text" placeholder='Enter Name' name="name" onChange={handOnChange}/>
            </div>

            <div>
            <label>Age:</label>
            <input type="number" placeholder='Enter Age'  name="age" onChange={handOnChange}/>
            </div>

            <div>
            <label>Address:</label>
            <input ref={passref} type="text" placeholder='Enter Address'name="address" onChange={handOnChange}/>
            </div>

            <div>
            <label>Departement:</label>
            <select name='depart' value={form.department} onChange={handOnChange}>
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
            {/* <label>:married</label> */}
            </div>
            {/* <div>
            <input type="checkbox" onChange={handOnChange} name="state"/>
            <label>:unmarried</label>
            </div> */}
            

            <div>
            <label>profile photo:</label>
            <input type="file"name="resume"onChange={handOnChange}/>
            </div>

            <button type="submit">Submit</button>
        </form>
       
    </div>
    </>
    </>
  )
}

export default Form
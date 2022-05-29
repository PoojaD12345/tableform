import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'
import {nanoid} from 'nanoid';

const TableHead = () => {
 const [contacts,setContacts]=useState([]);

    const handData = async (form) =>{
        const payload ={
            id: nanoid(7),
            name:form.name,
            age:form.age,
            address:form.address,
            salary:form.salary,
            depart:form.department,
            state:form.state,
        };
        setContacts([...contacts,payload]);
    
        try{
    
            let res = await fetch("http://localhost:8080/form",{
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json"
                },
            });
    
            let data = await res.json();
            console.log(data);
    
        }catch(e){
            console.log(e);
        }
    }
    console.log(contacts)
  return (
      <>
      <Form getData={handData}/>
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
               <Table contact={contact}/>
              ))}
         
          </tbody>
        </table> 
    </div>
      </>
    
  )
}

export default TableHead












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

    const handOnDelete=async(id)=>{
        setContacts(contacts.filter(contacts=>contacts.id!==id));

        await fetch(`http://localhost:8080/form/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
    }

  return (
      <>
      <Form getData={handData}/>
      <div>
        <table>
          <thead>
          <tr>
               <th>Emp Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Departement</th>
                <th>Salary</th>
                <th>Marital state</th>
            </tr>
          </thead>
          <tbody>
              {contacts.map((contact,index)=>(
               <Table 
               key={contact.id}
               contact={contact}
               handOnDelete={handOnDelete}
               isHiddwn={index%2===0}/>
              ))}
         
          </tbody>
        </table> 
        
      
   </div>
   {/* {contacts.map((e) => (
           <Table key={e.id} {...e}
           handOnDelete={handOnDelete}
           />
        ))} */}
      </>
    
  )
}

export default TableHead












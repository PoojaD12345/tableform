import React from 'react'



const Table = ({contact,handOnDelete}) => {
//  console.log(props.input)
  return (
    <tr >
    <td>{contact.id}</td>
    <td>{contact.name}</td>
    <td>{contact.age}</td>
    <td>{contact.address}</td>
    <td>{contact.depart}</td>
    <td>{contact.salary}</td>
    <td>{contact.state}</td>
    <button onClick={()=>handOnDelete(contact.id)}>Delete</button>
</tr>
  )
}

export default Table
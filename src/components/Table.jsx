import React from 'react'



const Table = ({contact}) => {
//  console.log(props.input)
  return (
    <tr>
    <td>{contact.name}</td>
    <td>{contact.age}</td>
    <td>{contact.address}</td>
    <td>{contact.depart}</td>
    <td>{contact.salary}</td>
    <td>{contact.state}</td>
</tr>
  )
}

export default Table
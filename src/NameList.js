import React from 'react'

function NameList(props) {
  return (
<table  className="table table-striped table-hover nameListTable">

<thead>
<tr>
    <th scope='col'>
        User Name :
    </th>

</tr>

</thead>
<tbody>


{ 
    props.listUser.map((user) => (
    <tr >
            {/* <button className='btn btn-info' id={user.id} onClick={props.handleClick}>{user.Name}</button> */}
            
            <td>{user.id} {user.Name}</td>
            <td>
            <button id={user.id} className='btn btn-dark' onClick={props.handelClick} >Click</button>

            </td>
            
            
            
            </tr>
    )
    )
}
</tbody>

</table>

  )
}

export default NameList

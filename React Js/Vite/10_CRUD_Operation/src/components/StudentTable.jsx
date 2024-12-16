import { Link } from 'react-router-dom'

function StudentTable() {

  return ( <div className='container'>
    <h1>Product Table</h1>
    <Link to={'student/create'}><button className='createStudent'>Create new Student</button></Link>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Airpods</td>
          <td>Boat</td>
          <td>2000</td>
          <td className='btn'>
            <Link><button className='view'>View</button></Link>
            <Link><button className='edit'>Edit</button></Link>
            <Link><button className='delete'>Delete</button></Link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>);
}

export default StudentTable;

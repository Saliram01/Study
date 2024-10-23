import React, { useState } from 'react'
import Header from '../components/Header'

function Form() {
let [userData , setUserData] = useState([]);
let [uEnquery , setEnquery] = useState(
  {
    uname : '',
    uemail : '',
    uphone : '',
    umessage : '',
    index : '',
  }
);


let getValue = (event) => {
  let oldData = {...uEnquery}
  let inputName = event.target.name;
  let inputValue = event.target.value;
  oldData[inputName] = inputValue;
  setEnquery(oldData)
}

let handleSubmit = (event) => {
  let currentUserData = {
    uname : uEnquery.uname,
    uemail : uEnquery.uemail,
    uphone : uEnquery.uphone,
    umessage : uEnquery.umessage,
  }

  let checkFilterUser = userData.filter((v,i) => v.uemail==uEnquery.uemail || v.uphone == uEnquery.uphone)
  if(checkFilterUser.length == 1){
    alert("Email And Phone Already Exists.....")
  }
  else{
    let oldUserData = [...userData,currentUserData];
  setUserData(oldUserData)
  setEnquery(
    {
      uname : '',
      uemail : '',
      uphone : '',
      umessage : '',
      index : '',
    }
  )
}
event.preventDefault();
  
}

function deleteRow(indexNum){
  let filterDataAfterDelete = userData.filter((v,i) => i != indexNum)
  setUserData(filterDataAfterDelete)
}

  return (
    <>
      <Header/>
      <div className="w-full sm:w-[80%] sm:ml-[20%] mt-16 h-auto">
          <h2 className='text-center text-fuchsia-800 font-bold py-4 pb-2 text-2xl underline'>Enquery Now</h2> 
          <form onSubmit={handleSubmit} className='max-w-xs sm:max-w-sm space-y-2 w-[80%] mx-auto sm:py-12 sm:px-4 sm:shadow-xl rounded'> 
              <div className="">
                  <label htmlFor="name">Name</label>
                  <input onChange={getValue} className='border py-2 w-full px-2 rounded outline-cyan-600 outline-4' type="text" id='name' name='uname' value={uEnquery.uname} />
              </div>
              <div className="">
                  <label htmlFor="email">Email</label>
                  <input onChange={getValue} className='border py-2 w-full px-2 rounded outline-cyan-600 outline-4' type="email" id='email' name='uemail' value={uEnquery.uemail}/>
              </div>
              <div className="">
                  <label htmlFor="phone">Phone</label>
                  <input onChange={getValue} className='w-full border-2 py-2 px-2 rounded outline-cyan-600 outline-4' type="text" id='phone' name='uphone' value={uEnquery.uphone}/>
              </div>
              <div className="">
                  <label htmlFor="message">Message</label>
                  <textarea onChange={getValue} className='w-full border-2 py-2 px-2 rounded outline-cyan-600 outline-4' name="umessage" id="message"  value={uEnquery.umessage}></textarea>
              </div>
              <button className='py-2 w-full border-2 rounded-md active:bg-green-500 hover:border-2 hover:text-blue-800  bg-green-400 text-white'>
                {uEnquery.index !== '' ? 'Update' : 'Save'}
              </button>
          </form>
      </div>

      <div className="w-full sm:w-[80%] sm:ml-[20%] mt-16 h-auto">
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Message
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {userData.length >= 1 ?

          userData.map((obj,i) => {
            return(
              <tr key={i} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i+1}
                </th>
                <td class="px-6 py-4">
                    {obj.uname}
                </td>
                <td class="px-6 py-4">
                    {obj.uemail}
                </td>
                <td class="px-6 py-4">
                    {obj.uphone}
                </td>
                <td class="px-6 py-4">
                    {obj.umessage}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => deleteRow(index)} className='border-2 px-4 py-1 mx-2'>Delete</button>
                    <button className='border-2 px-4 py-1'>Edit</button>
                </td>
            </tr>
            )
          })
          
          
            :

            <tr>
              <td colSpan={6}>No Data Found</td>
            </tr>
        
        }
            
        </tbody>
    </table>
</div>

      </div>
    </>
  )
}
export default Form
import React, { useState } from 'react'

const Object = () => {
    const [data, setData] = useState({
        username: "",
        email: '',
        password: '',
        confipassword: ""
    })

    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setData((data)=>{
        return {
            ...data,
            [name]: value,
        }
      })
    }

    const handleData = (e) => {
        e.preventDefault()

        let Userdat = {
            username: data.username,
            email: data.email,
            password: data.password,
            confipassword: data.confipassword
        }
        console.log(Userdat)
    }

  return (
    <>
    <form action="" onClick={handleData}>

      <div>
        <input type="text" name='username' value={data.username} onChange={handleChange}/>
      </div>
      <div>
        <input type="email" name='email' value={data.email} onChange={handleChange}/>
      </div>
      <div>
        <input type="password" name='password' value={data.password} onChange={handleChange}/>
      </div>
      <div>
        <input type="password" name='confipassword' value={data.confipassword} onChange={handleChange}/>
      </div>
      <div>
        <button onClick={handleChange}>Submit</button>
      </div>
    </form>
    </>
  )
}

export default Object

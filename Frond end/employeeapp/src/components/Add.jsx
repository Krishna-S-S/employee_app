import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
    var [inputs, setInputs] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
    var location = useLocation()
    var navigate = useNavigate()
    
    console.log("loc", location.state)
    const inputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(inputs);
    }
    const addHandler = () => {
        console.log("clicked")
        if (location.state !== null) {
            axios.put("http://localhost:3004/update/" + location.state.val._id, inputs)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/view')
                })
                .catch((err) => { console.log(err) });
        } else {
            axios.post("http://localhost:3004/add", inputs)
                .then((res) => {
                    console.log(res);
                    alert(res.data.message);
                    navigate('/view')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        if (location.state !== null) {
            setInputs({
                ...inputs,
                Name: location.state.val.Name,
                Age: location.state.val.Age,
                Dept: location.state.val.Dept,
                Sal: location.state.val.Sal
            });
        }
    }, []);

  return (
      <div>
          <Typography variant='h5'>Add Details</Typography><br /><br />
          <TextField id="outlined-basic" label="Name" variant="outlined" name="Name" value={inputs.Name} onChange={inputHandler}/><br /><br />
          <TextField id="outlined-basic" label="Age" variant="outlined" name="Age" value={inputs.Age} onChange={inputHandler} /><br /><br />
          <TextField id="outlined-basic" label="Department" variant="outlined" name="Dept" value={inputs.Dept} onChange={inputHandler} /><br /><br />
          <TextField id="outlined-basic" label="Salary" variant="outlined" name="Sal" value={inputs.Sal} onChange={inputHandler} /><br /><br />
          <Button variant="contained" onClick={addHandler}>Add</Button>
    </div>
  )
}

export default Add
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [emp, setEmp] = useState([])
    var navigate=useNavigate()
    useEffect(() => {
   
        axios.get("http://localhost:3004/view")
            .then((res) => {
                setEmp(res.data);
                console.log(res)

            })
            .catch((err) => console.log(err))

    })

    const delValue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload();
            
            })
        .catch((err)=>console.log(err))
    }
    const updateValue = (val) => {
        console.log("Up clicked")
        navigate("/add",{state:{val}})
    }
  return (
      <div>
          <Typography variant='h5'>View Details</Typography>
          <TableContainer>
              <Table>
                  <TableHead>
                      
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Department</TableCell>
                          <TableCell>Salary</TableCell>
                          <TableCell>Update</TableCell>
                          <TableCell>Delete</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {emp.map((val) => {
                          return (
                        
                              <TableRow>
                                  <TableCell>{val.Name}</TableCell>
                                  <TableCell>{val.Age}</TableCell>
                                  <TableCell>{val.Dept}</TableCell>
                                  <TableCell>{val.Sal}</TableCell>
                                  <TableCell>
                                      <Button variant='contained' style={{ backgroundColor: 'Blue', color: 'white' }} onClick={() => {
                                          updateValue(val)
                                      }} >Update</Button>
                                  </TableCell>
                                  <TableCell>
                                      <Button variant='contained' style={{ backgroundColor: 'Red', color: 'white' }} onClick={() => {
                                          delValue(val._id)}}>Delete</Button>
                                  </TableCell>
                              </TableRow>

                          )
                      })
                    }
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default View
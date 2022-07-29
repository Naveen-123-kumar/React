import React, { useState } from 'react'
import {Box, Button, Typography} from '@mui/material'
import { useEffect } from 'react'
const Page2 = () => {
  const [count, setCount] = useState(0)
 
  function handleChange(){
    setCount(count+1)
  }
  function handleChange1(){
    setCount(count-1)
  }
  return (
    <>
    <Box sx={{fontSize:'3rem',margin:'auto',width:'100%', textAlign:'center'}}>
      {count}
    </Box>
    <Button variant='contained' onClick={handleChange}>Click Me</Button><br /> <br />
    <Button variant='contained' onClick={handleChange1}>Reduce Me</Button>

    
    </>
  )
}

export default Page2
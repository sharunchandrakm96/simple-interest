
import './App.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const [Pamount,setPamount]=useState(0)
  const [Rate,setRate]=useState(0)
  const [Time,setTime]=useState(0)
  const [result,setResult]=useState(0)

  const [ValidPamount,setValidPamount]=useState(false)
  const [ValidRate,setValidRate]=useState(false)
  const [ValidTime,setValidTime]=useState(false)

  const validInput=(e)=>{
    const {name,value}=e.target
    // console.log(name,value)
    if(value.match(/[0-9]*?[0-9]+$/)){
    if(name=='Pamount'){
      setPamount(value)
      setValidPamount(true)
    }
    else if(name=='Rate'){
    setRate(value)
    setValidRate(true)
   }
   else{
    setTime(value)
    setValidTime(true)
   }
  }
  else{
    if(name=='Pamount'){
      setPamount(0)
      setValidPamount(false)
    }
    else if(name=='Rate'){
    setRate(0)
    setValidRate(false)
   }
   else{
    setTime(0)
    setValidTime(false)
   }
  }
  }

  console.log(Pamount,Rate,Time)
  // console.log(ValidPamount,ValidRate,ValidTime)

  const resetform=()=>{
    setPamount(0)
    setRate(0)
    setTime(0)
    setResult(0)

    setValidPamount(false)
    setValidRate(0)
    setValidTime(0)
  }

  const submitted=(e)=>{
    e.preventDefault()
    console.log(Pamount,Rate,Time)

    const res=(Pamount*Rate*Time)/100
    setResult(res)


    // console.log(typeof(Pamount))
    // const pattern=/^[1-9][0-9]*$/
    // if(!Pamount.match(pattern)){
    //   //alert("invalid principle amount")
    //   setValidPamount(true)
    // }
   
    // if(!Rate.match(/^[1-9][0-9]{0,1}$/)){
    //   alert("invalid Rate")
      
    // }
   
    // if(!Pamount.match(/^[1-9][0-9]{0,1}$/)){
    //   alert("invalid duration")
      
    // }
  }
  

  return (
    <>
    <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <div className='bg-light w-50 shadow roundeed p-5'>
      <h1>Simple interest Calculator</h1>
      <div className='d-flex justify-content-center p-5 border shadow mt-3' style={{backgroundColor:'yellow'}}>
      ₹ {result}
      </div>
      <form onSubmit={(e)=>{submitted(e)}}>
        <div className='mt-2'>
        <TextField id="outlined-basic" value={Pamount} name='Pamount' onChange={(e)=>{validInput(e)}} style={{width:'100%'}} label="₹ principle Amount" variant="outlined" />
        {
          !ValidPamount &&
          <div className='text-danger'>
              Invalid principle Amount
          </div>
        }
        </div>
        <div className='mt-2'>
        <TextField id="outlined-basic" value={Rate} name='Rate' onChange={(e)=>{validInput(e)}} style={{width:'100%'}} label="% Rate" variant="outlined" />
        {
          !ValidRate &&
          <div className='text-danger'>
              Invalid principle Amount
          </div>
        }
        </div>
         <div className='mt-2'>
        <TextField id="outlined-basic" value={Time} name='Time' onChange={(e)=>{validInput(e)}} style={{width:'100%'}} label="Time" variant="outlined" />
        {
          !ValidTime &&
          <div className='text-danger'>
              Invalid principle Amount
          </div>
        }
        </div>
        <Stack spacing={2} direction={'row'}>
        <Button variant="contained" disabled={ValidPamount&&ValidRate&&ValidTime?false:true} type='submit' className='bg-dark' style={{height:'50px',width:'50%'}}>Submit</Button>
        <Button variant="contained" className='bg-info' onClick={resetform} style={{height:'50px',width:'50%'}}>Reset</Button>
          </Stack>
      </form>
      </div>
    </div>
     
    </>
  )
}

export default App

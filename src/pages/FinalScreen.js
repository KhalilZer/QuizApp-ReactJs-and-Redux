import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import data from "../Data.json"
import { RENITIALISER, RENITIALISERTIME } from '../redux/actions/types'

const FinalScreen = () => {
const dispatch=useDispatch()
const navigate =useNavigate()
const score=useSelector(state=>state.score)

const RefaireTest=()=>{
    navigate("/");
    dispatch({
        type:RENITIALISER
    })
    dispatch({
        type:RENITIALISERTIME
    })

}
  return (


    <Box mt={10} textAlign='center' sx={{position:'relative', bottom:450}}>
        <Typography variant='h4' fontWeight={'bold'}>
            Félicitations! 
        </Typography>
        <Typography m='20px' variant='h6' >
            Voici votre Score
        </Typography>
        <Box  component="span" sx={{ m:4, borderRadius:2, bgcolor:'#cfdff3',p:2, pr:4,pl:4, boxShadow:4 }}>
            <Typography textAlign={'center'}  variant='span' fontWeight={'bold'} color="primary">
                {score}/{data.length}
            </Typography>
        </Box>
        <br/>
        <Button onClick={RefaireTest}  variant="contained" sx={{mt:4,width: '200px',borderRadius:30}} style={{background:"#5cc7f8"}}>Refaire le Test</Button>
    </Box>
  )
}

export default FinalScreen
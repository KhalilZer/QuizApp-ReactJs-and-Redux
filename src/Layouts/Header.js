
import React, { useEffect, useRef, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
/* import Button from '@mui/material/Button'; */

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import data from "../Data.json"


const Header = () => {

const countSt =useSelector(state=>state.count); 

const time =useSelector(state=>state.time);

//TIMER
const [timerMin , setTimerMin]=useState("00")
const [timerSec,setTimerSec]=useState("00")
let interval=useRef()


const startTimer = ()=>{
    const countDown=Date.now()+parseInt(time)*1000;
   
    interval =setInterval(() => {

        
        const now=new Date()

        const distance=countDown-now;

        const min=Math.floor(distance %(1000*60*60) / (1000*60))
        const sec=Math.floor(distance %(1000*60) / 1000)
        

        if(distance<0){
           clearInterval(interval.current)
        } 
        else{
           setTimerMin(min)
           setTimerSec(sec)
        }
    }, 1000);
}

useEffect(()=>{
    startTimer();
    return () =>{
        clearInterval(interval.current)
    }
})


    return (
        <Box sx={{   boxShadow: 4, borderRadius:'40px' ,textAlign:'center'}}>
            <Box sx={{zIndex: 'tooltip' , height:600}}>
                <AppBar sx={{ borderRadius: '40px',height:200 }} position="static" style={{background:'#5cc7f8'}}>
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Quiz Application
                    </Typography>
                    <AccountCircleOutlinedIcon color="inherit"/>

                    </Toolbar>

                    <Typography align='left' ml={2}>Hello (Projet Khalil ZERZOUR)</Typography>
                    <Typography align='left' ml={2} sx={{color:"grey.700"}}>Application React Redux QUIZ avec un Timer</Typography>
                    
                </AppBar>
            </Box>
            <Box
                sx={{
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : '#fff'),
                    p: 2,
                    m:4,
                    boxShadow: 8,
                    borderRadius: 6,
                    height:60,
                    zIndex: 'tooltip',
                    position:'relative',
                    bottom:450,
                    textAlign:'center',
                   
                }}>
                    <Grid container  spacing={0} alignItems="center" justify="center" >
                        <Grid item xs={6} >
                        
                                <Typography variant='h6' fontSize={14} sx={{mb:2}}>Question</Typography>
                                <Box  component="span" sx={{ borderRadius:1, pt:1,pb:1, bgcolor:'#cfdff3'}}>
                                    <Typography p={4} variant='span' fontWeight={'bold'} color="primary">
                                        {countSt+1}/{data.length}
                                    </Typography>
                                </Box>
                        </Grid>
                        <Grid item xs={6}  >
                                <Typography variant='h6' fontSize={14} sx={{mb:2}}>Question</Typography>
                                <Box  component="span" sx={{ borderRadius:1, pt:1,pb:1, bgcolor:'#cfdff3'}}>
                                    <Typography p={4}  variant='span' fontWeight={'bold'} color="primary">
                                        {timerMin}: {timerSec}
                                    </Typography>
                                </Box>
                        </Grid>
                        
                    </Grid>
            </Box>

         
        </Box>
       
        
      )
}

export default Header




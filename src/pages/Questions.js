import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import data from "../Data.json"
import { ADDSCOORE, INCRIMENTER, RENITIALISERTIME, SETTIME } from "../redux/actions/types"



const Questions = () => {

let Correct=false;
const navigate =useNavigate()
const countSt =useSelector(state=>state.count);

const dispatch=useDispatch();



//MesFonctions
const setTime=()=>{
    dispatch({
        type:SETTIME
    })
}
    //Incrementation le score
const addScore=()=>{
    dispatch({
        type:ADDSCOORE
    })
   
}
    //OnClick sur le bouton Suivant
const callIncrement=()=>{
   
   if(countSt<data.length-1)
   {
        dispatch({
            type:INCRIMENTER
        })
        
   }
   else{
        navigate('/finalScreen')
        dispatch({
            type:RENITIALISERTIME
        })
        
   }
   //Appel de fonction dispatch pour changer la durée 
   setTime()
   //
    if(Correct)
        addScore()
       
}
    //Fonction Pour charger la bonne reponse
const callStatutReponse=(rep) =>{
    Correct=rep
    
}

//
  return (
    <Box pl="20" mt={2}  textAlign='center' sx={{  p:4, position:'relative', bottom:450}}>
        <Box p={1} m={3} sx={{border:'1px solid', borderColor: '#5cc7f8', boxShadow:5 }}>
            <Typography textAlign={"center"} fontFamily={'Roboto'} variant="h6" >Question N° {data[countSt].id}</Typography>
        </Box>
        <Typography  align={"left"} fontFamily={'BlinkMacSystemFont'}  variant="h6" fontSize={"14px"}>{data[countSt].label}</Typography>
        <RadioGroup
                    
                >
            {data[countSt].answers.map(rep=>{
                    return (
                        <FormControlLabel  value={rep.label} control={<Radio sx={{color:'skyblue'}} onChange={()=>callStatutReponse(rep.correct)} />} label={rep.label} />
                    )
            })}
        </RadioGroup>
        <Button onClick={callIncrement} variant="contained" sx={{width: '200px',borderRadius:30}} style={{background:"#5cc7f8"}}>
            Suivant
        </Button>
      
    </Box>
  )
}

export default Questions
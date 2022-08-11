import { createTheme } from "@mui/material";
import {makeStyles} from "@mui/styles"

const theme = createTheme({
    palette:{
        disableBtn:{
            main:'#EAEAEA'
        },
        navBtn:{
            main:'#000000'
        }
    }
})

const useStyles = makeStyles((theme) =>{
    return{
        logo:{
            display:'flex',
        },
        text:{
            position:'relative',
            top:50
        },
        homePage:{
            marginTop:5,
        },
        wrapper:{
            display:'flex',
            justifyContent:'space-between',
            background:'#F2FBF6',
            padding:20
        }, 
        list:{
            padding:10,
            border:'solid black 1px',
            borderRadius:'7px',
            textAlign:'center'
        },
        success:{
            background:'#a2fa1d',
            color:'white',           
            border: '#a2fa1d solid 1px',
            borderRadius:'10px',
            width:'50%',
            position:'relative',
            left:60
        },
        error:{
            background:'red',
            color:'white',           
            border: 'red solid 1px',
            borderRadius:'10px',
            width:'50%',
            position:'relative',
            left:60
        },


    }
})

export {useStyles, theme};
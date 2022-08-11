import { Box, Button, CircularProgress, Container, Grid, List, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useStyles } from "../Styles"


const CodingTest = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error,  setError] = useState(null)
    const asalytics = `
        query{
            asalist {
            results {
                assetId
                available
                name
                logo
            }
            }
        }
      
    `

    useEffect(() =>{
        fetch('https://analytics-api.herokuapp.com/analytics',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({query: asalytics})
        })
        .then(res => {
            if(!res.ok){
                throw Error ('Could not fetch data for this resource')
            }
            return res.json()
        })
        .then((res ) => {
            setData(res.data.asalist.results)
            setIsLoading(false)
            setError(null)
        })
        .catch(err => {
            setError('Failed to fetch assets😔, Kindly check your internent connection')
            setIsLoading(false)
            setData([])
        })
    },[asalytics])


  return (
    <Container className={classes.homePage}>
       <Box className={classes.wrapper}>
        <Box className={classes.logo}>
            <img src="/img/vector 2.png" alt="asalytics-logo" />
            <Typography className={classes.text}>SAlytics</Typography>
        </Box>
        <Box sx={{mt:'20px'}}>
            <Button sx={{color:'white'}} variant='contained' color='navBtn'>ANALYSE ASAs</Button>
        </Box>
       </Box>
       <Box>
        <Typography variant="h6" sx={{textAlign:'center', p:3}}>List of Algorads Standard Assets <br/> on ASAlytics</Typography>
       </Box>
        {error && <Typography variant='h5' sx={{textAlign:'center', color:'#BC3131', my:10}}>{error}</Typography>}
        {isLoading && (<Box className={classes.loading}><CircularProgress color="navBtn"/> Loading assets...</Box>)}
       <Grid container  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{mb:5}}>
        {data.map((card) => (
                <Grid item xs={12} md={3} sm={4} key={card.assetId}>
                    <List  className={classes.list}>
                        <img src={card.logo} alt='coin' style={{width:'50px'}}/>
                        <Typography > {card.name}</Typography>
                        {card.available  ===true ? (<Typography className={classes.success} >Available</Typography>):(<Typography className={classes.error}>Unavailable</Typography>) }
                    </List>
                </Grid>
        ))}
        </Grid >
    </Container>
  )
}

export default CodingTest
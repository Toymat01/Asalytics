import { Box, Button, CircularProgress, Container, Grid, List, Typography } from "@mui/material"
import { useStyles } from "../Styles"
import useFetch from "../useFetch";


const Home = () => {
    const classes = useStyles();
   const {data, error, loading} = useFetch()
  


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
        {error && <Typography variant='h5' sx={{textAlign:'center', color:'#BC3131', my:10}}>error fetching data, check your internet connectionn</Typography>}
        {loading && (<Box className={classes.loading}><CircularProgress color="navBtn"/> Loading assets...</Box>)}
       <Grid container  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{mb:5}}>
        {data && data.asalist.results.map((asset) => (
                <Grid item xs={12} md={3} sm={4} key={asset.assetId}>
                    <List  className={classes.list}>
                        <img src={asset.logo} alt='coin' style={{width:'50px'}}/>
                        <Typography > {asset.name}</Typography>
                        {asset.available  ===true ? (<Typography className={classes.success} >Available</Typography>):(<Typography className={classes.error}>Unavailable</Typography>) }
                    </List>
                </Grid>
        ))}
        </Grid >
    </Container>
  )
}

export default Home
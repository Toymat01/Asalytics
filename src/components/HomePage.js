import { Button, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import { useStyles } from "../Styles"

const HomePage = () => {
    const classes = useStyles()
  return (
    <Container className={classes.homePage}>
        <header>
            <Box className={classes.wrapper}>
            <Box className={classes.logo}>
                <img src="/img/vector 2.png" alt="asalytics-logo" />
                <Typography className={classes.text}>SAlytics</Typography>
            </Box>
            <Box sx={{mt:'20px', display:'flex'}}>
                <Button variant='contained' color='disableBtn' sx={{mx:2}}>Login</Button>
                <Button variant='contained' color='navBtn' sx={{color:'white'}}>ANALYSE ASA</Button>
            </Box>
        </Box>
        <Box sx={{textAlign:'center', py:5,}}>
            <Typography variant='h5'sx={{fontSize:'40px'}} > Explore Algorand <br/> Standard Assets🤞🏾 </Typography>
            <Typography sx={{color:'#626772', fontSize:'14px',}}>Explore opinions for Algorand Standard Assets across <br /> multiple social platforms for free all on one platform.</Typography>
            <Button variant='contained' color='navBtn' sx={{color:'white', my:2}}>ANALYSE ASA</Button>
        </Box>
       </header>
       <section>
        <Box>
            <Typography sx={{fontSize:'36px', color:'#0D3E36', }} variant='h6'>Market Update</Typography>
            <Typography sx={{fontSize:'14px', color:'#4D625F', }}>Algorand Standard Assets (ASAs) Categories</Typography>
        </Box>
       </section>
    </Container>
  )
}

export default HomePage
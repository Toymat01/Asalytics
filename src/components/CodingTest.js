import { Box, Container, Grid, List, Typography } from "@mui/material"
import { useStyles } from "../Styles"


const CodingTest = () => {
    const classes = useStyles();
    const cards = [
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Available',
            id:1
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Available',
            id:2
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Available',
            id:3
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Available',
            id:4
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Unavailable',
            id:5
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Unavailable',
            id:6
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Unavailable',
            id:7
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Unavailable',
            id:8
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Unavailable',
            id:9
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Unavailable',
            id:10
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Unavailable',
            id:11
        },
        {
            logo:'/img/bitcoin.png',
            name:'Alogrand',
            button:'Available',
            id:12
        },
    ]

  return (
    <Container className={classes.homePage}>
       <Box className={classes.wrapper}>
        <Box className={classes.logo}>
            <img src="/img/vector 2.png" alt="asalytics-logo" />
            <Typography className={classes.text}>SAlytics</Typography>
        </Box>
        <Box sx={{mt:'20px'}}>
            <Typography className={classes.textTwo}>ANALYSE ASAs</Typography>
        </Box>
       </Box>
       <Box>
        <Typography variant="h6" sx={{textAlign:'center', p:3}}>List of Algorads Standard Assets <br/> on ASAlytics</Typography>
       </Box>
       <Grid container  rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{mb:5}}>
        {cards.map((card) => (
                <Grid item xs={12} md={3} sm={4}>
                    <List key={card.id} className={classes.list}>
                        <img src={card.logo} alt='coin'  />
                        <Typography > {card.name}</Typography>
                        <Typography className={card.button === 'Available' ? classes.success : classes.error} >{card.button}</Typography>
                    </List>
                </Grid>
        ))}
        </Grid >
    </Container>
  )
}

export default CodingTest
import React from 'react';
import Signup from './Signup';
import HomeNav from './navs/HomeNav';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

//style
const useStyles = makeStyles({
    headerContainer:{
        display:"flex",
        flexDirection:"column",
        backgroundImage: 'url("https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        maxWidth: '100%',
        height: '85vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        borderBottom: '8px solid #B3BE9F'
    },
    textContainer: {
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        textAlign: 'center',
        margin: '2%',
        marginRight: '50%',
        // border: '1px solid red',
        marginTop: '0.75'
    },
    h1Styles: {
        color: '#6C845E',
        fontWeight: 'bold',
        fontFamily: 'Sansita',
        fontSize: '8rem',
    },
    h2Styles: {
        color: '#B3BE9F',
        fontFamily: 'Sora', 
    },
    textStyles1: {
        paddingTop: '1.25%',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#7A7A7A'
    },
    textStyles2: {
        paddingTop: '1.25%',
        fontSize: '1.15rem',
        color: '#8A8A8A',
        paddingBottom: '5%'
    },
    marketingContainer:{
        display: 'flex',
        maxWidth: '100%',
    },
    textAndImg: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '4%'
    },
    imgStyles: {
        height: '65vh',
        borderRadius: '20px'
   },
    textStylesLeft: {
        paddingTop: '15%',
        width: '50%',
        textAlign: 'center',
        paddingLeft: '15%',
        fontFamily: 'Exo',
        fontSize: '2.75rem',
        color: '#7A7A7A'
    },
    textStylesRight: {
        paddingTop: '15%',
        width: '45%',
        textAlign: 'center',
        paddingLeft: '35%',
        fontSize: '2.60rem',
        fontFamily: 'Exo',
        color: '#7A7A7A'
    },
    footerContainer:{
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',      
        textAlign: 'center',
        marginTop: '6%',
        padding: '1.15%',
        background: '#B3BE9F'
    },
    footerText: {
        color: 'white',
        fontFamily: 'Saira',
    }
});

const MarketingPage = () => {

    const classes = useStyles();

    return (
        <>
            {/* <Signup /> */}

            {/* header */}
            <Grid container className={classes.headerContainer}>
            <HomeNav />
                <Grid container className={classes.textContainer}>
                    <Grid item> 
                        <Typography variant="h1" className={classes.h1Styles}>
                            W a t e r
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" className={classes.h2Styles}>
                            My Plants
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.textStyles1}>
                            Plants have feelings too.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.textStyles2}>
                            No more dead plants <br /> with our awesome web app.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* marketing */}
            <Grid container className={classes.marketingContainer}>
                {/* row 1 */}
                <Grid container className={classes.textAndImg}>
                    <Grid item>
                        <Typography  className={classes.textStylesLeft}>
                            See all your plants in one place
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="https://cdn.discordapp.com/attachments/795821010661146664/817212206465679380/pexels-photo-793012.jpg" alt="plants" className={classes.imgStyles} />
                    </Grid>
                </Grid>

                {/* row 2 */}
                <Grid container className={classes.textAndImg}>
                    <Grid item>
                        <img src="https://cdn.discordapp.com/attachments/795821010661146664/817212168092647434/pexels-photo-4750274.jpg" alt="plants" className={classes.imgStyles} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.textStylesRight}>
                            Keep track of their watering schedule
                        </Typography>
                    </Grid>
                </Grid>

                {/* row 3 */}
                <Grid container className={classes.textAndImg}>
                    <Grid item>
                        <Typography variant="h3" className={classes.textStylesLeft}>
                            Never have a plant die on you again
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="https://cdn.discordapp.com/attachments/795821010661146664/817205771007033385/pexels-photo-6231781.png" alt="plants" className={classes.imgStyles} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className={classes.footerContainer}>
                <Grid item>
                    <Typography variant="subtitle1" className={classes.footerText}>
                        Contact us at:
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" className={classes.footerText}>
                        Lambda@Lambda.com
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" className={classes.footerText}>
                        ©Copyright
                    </Typography>
                </Grid>
            </Grid> 
        </>
    )
}

export default MarketingPage;
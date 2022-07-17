import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";

function PopularJobLocations() {
    const router = useRouter();
    return (
        <>
            <Box sx={{ width: '100%', py: 8, display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center', }} >
                        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                            <Typography variant='h2' sx={{ fontSize: '28px', lineHeight: '36px', fontFamily: 'GraphikBold', color: '#29293d' }} >
                                {
                                   router.pathname === '/country' ? `Popular job locations for ${'Pakistan'}` : "Popular job locations"
                                }
                            </Typography>
                            <Typography variant='h2' sx={router.pathname === '/home' ?{ fontSize: '18px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#29293d', mt: 1 }:{display:'none'}} >
                                More than 5 cities are available for your job search. Find a job near you
                            </Typography>
                        </Box>
                        <AnchorLink href='/country/locations' sx={router.pathname === '/country' ? {
                            backgroundColor: '#f4f5f6', px: 2, py: 1.5, borderRadius: '8px', color: '#0e54ff', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikSemibold', textDecoration: 'none', display: {
                                md: 'block',
                                xs: 'none'
                            }, fontWeight: 500,
                        }:{display:'none'}} >
                            More cities
                        </AnchorLink>
                    </Box>
                    <Box sx={{ flexGrow: 1, width: '100%', mt: 6 }}>
                        <Grid container rowSpacing={4} columnSpacing={2}>
                            {
                                Cities.map((city) => {
                                    return <Grid key={city.id} item xs={6} md={3}>
                                        <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center' }} >
                                            <AnchorLink href='' sx={router.pathname === '/country' ? { fontSize: '18px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#29293d', textDecoration: 'none', textTransform: 'capitalize' }:{ fontSize: '18px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#2252c7', textDecoration: 'none', textTransform: 'capitalize' }} >
                                                {city.city}
                                            </AnchorLink>
                                        </Box>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                    {/* "More cities" button for mobile */}
                    <AnchorLink href='/country/locations' sx={router.pathname != '/country' ? {display:'none'} : {
                        width: '100%',
                        backgroundColor: '#f4f5f6', py: 2, borderRadius: '8px', color: '#0e54ff', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', fontWeight: 500, textDecoration: 'none', display: {
                            md: 'none',
                            xs: 'block'
                        }, textAlign: 'center', mt: 4
                    }} >
                        More cities
                    </AnchorLink>
                </Container>
            </Box>
        </>
    )
}

export default PopularJobLocations;

// Demo Data
const Cities = [
    {
        id: 1,
        city: "lahore"
    },
    {
        id: 2,
        city: "Faisalabad"
    },
    {
        id: 3,
        city: "Karachi"
    },
    {
        id: 4,
        city: "Jhang sadar"
    },
    {
        id: 5,
        city: "Islamabad"
    }
]
import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useState } from 'react';
import Grid from '@mui/material/Grid';

function Footer() {
  return (
    <>
      <Box sx={{ width: '100%', py: 4, display: "flex", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fbfbfb' }} >
        <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
          <Box sx={{ flexGrow: 1, width: '100%', mt: 6 }}>
            <Grid container rowSpacing={0} columnSpacing={2}>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                  <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', fontFamily: 'GraphikSemiBold', color: '#29293d', mb: 1 }} >
                    Employers
                  </Typography>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    Hire Staff
                  </AnchorLink>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    Advertise a job
                  </AnchorLink>
                  <AnchorLink href='' sx={{
                    color: '#222', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    Employers Blog
                  </AnchorLink>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{
                  width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: {
                    md: 0,
                    xs: 3
                  }
                }} >
                  <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', fontFamily: 'GraphikSemiBold', color: '#29293d', mb: 1 }} >
                    Job Seekers
                  </Typography>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    Career advice
                  </AnchorLink>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    JOB TODAY Global
                  </AnchorLink>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{
                  width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: {
                    md: 0,
                    xs: 3
                  }
                }} >
                  <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', fontFamily: 'GraphikSemiBold', color: '#29293d', mb: 1 }} >
                    JOB TODAY
                  </Typography>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    About JOB TODAY
                  </AnchorLink>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    Help Center
                  </AnchorLink>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    All job categories
                  </AnchorLink>
                  <AnchorLink href='' sx={{
                    color: '#000', fontSize: '16px', lineHeight: '34px', fontFamily: 'GraphikRegular', textDecoration: 'none'
                  }} >
                    All job locations
                  </AnchorLink>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{
                  width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: {
                    md: 0,
                    xs: 3
                  }
                }} >
                  <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', fontFamily: 'GraphikSemiBold', color: '#93939a', mb: 1 }} >
                    Follow us
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <img src="/pictures/home/fb-footer.svg" style={{ width: '40px', height: '40px', objectFit: 'contain' }} alt="icon" />
                    </AnchorLink>
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <img src="/pictures/home/twitter-footer.svg" style={{ width: '40px', height: '40px', objectFit: 'contain' }} alt="icon" />
                    </AnchorLink>
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <img src="/pictures/home/instagram-footer.svg" style={{ width: '40px', height: '40px', objectFit: 'contain' }} alt="icon" />
                    </AnchorLink>
                    <AnchorLink href='' >
                      <img src="/pictures/home/linkedin-footer.svg" style={{ width: '40px', height: '40px', objectFit: 'contain' }} alt="icon" />
                    </AnchorLink>
                  </Box>
                  <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', fontFamily: 'GraphikSemiBold', color: '#93939a', mb: 1, mt: 3 }} >
                    Download our app
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <img src="/pictures/home/app-store-badge-en.svg" style={{ width: '128px', height: 'px', objectFit: 'contain' }} alt="icon" />
                    </AnchorLink>
                    <AnchorLink href='' >
                      <img src="/pictures/home/google-play-badge-en.png" style={{ width: '142px', height: '56px', objectFit: 'contain' }} alt="icon" />
                    </AnchorLink>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{
            width: '100%', display: "flex", justifyContent: {
              md: 'start',
              xs: 'center'
            }, alignItems: {
              md:'center',
              xs:'start'
            }, flexDirection: {
              md: 'row',
              xs: 'column'
            }, mt:{
              md:2,
              xs:2
            }
          }} >
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
              <img style={{ width: '18px', height: '18px', objectFit: 'contain', marginBottom: '2px' }} src="/pictures/home/logo.svg" alt="logo" />
              <Typography variant='h2' sx={{ fontSize: '15px', fontFamily: 'GraphikRegular', color: '#29293d', ml: 1 }} >
                © 2022 NextJb S.A. All Rights Reserved
              </Typography>
            </Box>
            <Box sx={{
              display: "flex", justifyContent: 'center', alignItems: 'center', ml: {
                md: 8
              }, mt: {
                md: 0,
                xs: 1.5
              }
            }} >
              <AnchorLink href='' sx={{
                fontSize: '15px', fontFamily: 'GraphikRegular', color: '#29293d', textDecoration: 'none'
              }} >
                Privacy
              </AnchorLink>
              <AnchorLink href='' sx={{
                fontSize: '15px', fontFamily: 'GraphikRegular', color: '#29293d', textDecoration: 'none', mx: 2
              }} >
                Terms of Service
              </AnchorLink>
              <AnchorLink href='' sx={{
                fontSize: '15px', fontFamily: 'GraphikRegular', color: '#29293d', textDecoration: 'none'
              }} >
                GDPR
              </AnchorLink>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer;
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image';
import { useRouter } from "next/router";

const languages = [
  // {
  //   code: 'fr',
  //   name: 'Français',
  //   country_code: 'fr',
  // },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
]


function Footer() {
  const router = useRouter();

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();


  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    // document.title = t('app_title')
  }, [currentLanguage, t,])


  return (
    <>
      <Box sx={router.pathname === '/country' || router.pathname === '/' ? { display: 'none' } : { width: '100%', py: 4, display: "flex", justifyContent: 'center', alignItems: 'center', backgroundColor: '#fbfbfb' }} >
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
                  <FormControl sx={{ minWidth: 150, mb: 3 }} size="small">
                    <InputLabel id="demo-select-small" sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} ><LanguageIcon sx={{ mr: "4px" }} /> Language</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={currentLanguageCode}
                      label="------Language"
                      onChange={(event) => i18next.changeLanguage(event.target.value)}
                    >
                      {
                        languages.map(({ code, name, country_code }) => {
                          return <MenuItem key={country_code} value={code}>{name}</MenuItem>
                        })
                      }
                    </Select>
                  </FormControl>
                  <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', fontFamily: 'GraphikSemiBold', color: '#93939a', mb: 1 }} >
                    Follow us
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <Image src={'/pictures/home/fb-footer.svg'} width={40} height={40} objectFit={'contain'} alt={'icon'} />
                    </AnchorLink>
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <Image src={'/pictures/home/twitter-footer.svg'} width={40} height={40} objectFit={'contain'} alt={'icon'} />
                    </AnchorLink>
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <Image src={'/pictures/home/instagram-footer.svg'} width={40} height={40} objectFit={'contain'} alt={'icon'} />
                    </AnchorLink>
                    <AnchorLink href='' >
                      <Image src={'/pictures/home/linkedin-footer.svg'} width={40} height={40} objectFit={'contain'} alt={'icon'} />
                    </AnchorLink>
                  </Box>
                  <Typography variant='h2' sx={{ fontSize: '20px', lineHeight: '28px', fontFamily: 'GraphikSemiBold', color: '#93939a', mb: 1, mt: 3 }} >
                    Download our app
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                    <AnchorLink href='' sx={{ mr: 2 }} >
                      <Image src={'/pictures/home/app-store-badge-en.svg'} width={128} height={56} objectFit={'contain'} alt={'icon'} />
                    </AnchorLink>
                    <AnchorLink href='' >
                      <Image src={'/pictures/home/google-play-badge-en.png'} width={142} height={56} objectFit={'contain'} alt={'icon'} />
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
              md: 'center',
              xs: 'start'
            }, flexDirection: {
              md: 'row',
              xs: 'column'
            }, mt: {
              md: 2,
              xs: 2
            }
          }} >
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
              <Box sx={{mr:'4px',display: "flex", justifyContent: 'center', alignItems: 'center'}} >
              <Image src={'/pictures/home/logo.svg'} width={18} height={18} objectFit={'cover'} alt={'logo'} />
              </Box>
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
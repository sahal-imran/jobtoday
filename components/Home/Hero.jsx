import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';


function Home() {
  const { t } = useTranslation();


  const [Profile, setProfile] = React.useState(false);
  const handleClickProfile = () => {
    setProfile(true);
  };

  const handleCloseProfile = () => {
    setProfile(false);
  };


  return (
    <>
      <Box sx={{
        width: '100%', height: {
          md: '95vh',
          sm: '50vh',
          xs: '30vh'
        }, position: 'relative', overflow: 'hidden'
      }} >
        <Box sx={{ width: '100%', height: '110%', position: 'absolute', top: '0px', left: '0px' }} >
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="/pictures/home/small-bg.jpg" alt="bg" />
        </Box>
        {/* Top bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', p: 2, position: 'absolute', top: '0px' }} >
          <AnchorLink href='' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Image src={'/pictures/home/logo.svg'} width={56} height={56} objectFit={'cover'} alt={'logo'} />
          </AnchorLink>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Button variant='contained' sx={{
              px: 2, py: 0.5, borderRadius: '32px', fontSize: '16px', backgroundColor: 'rgba(0,0,0,.3)', color: 'white', boxShadow: 'none', fontFamily: 'GraphikRegular', fontWeight: 400, textTransform: 'capitalize', "&:hover": {
                backgroundColor: 'rgba(0,0,0,.35)', boxShadow: 'none'
              }
            }} >
              <AnchorLink href='' sx={{ color: 'white', textDecoration: 'none' }}>
                blog
              </AnchorLink>
            </Button>
            <Button variant='contained' sx={{
              px: 2, py: 0.5, borderRadius: '32px', fontSize: '16px', backgroundColor: 'rgba(0,0,0,.3)', color: 'white', boxShadow: 'none', fontFamily: 'GraphikRegular', textTransform: 'capitalize', "&:hover": {
                backgroundColor: 'rgba(0,0,0,.35)', boxShadow: 'none'
              }, mx: 2
            }} >
              chats
            </Button>
            <Button onClick={() => handleClickProfile()} variant='contained' sx={{
              px: 2, py: 0.5, borderRadius: '32px', fontSize: '16px', backgroundColor: 'rgba(0,0,0,.3)', color: 'white', boxShadow: 'none', fontFamily: 'GraphikRegular', textTransform: 'capitalize', "&:hover": {
                backgroundColor: 'rgba(0,0,0,.35)', boxShadow: 'none'
              }
            }} >
              profile
            </Button>
          </Box>
        </Box>
        {/* Search form */}
        <Box sx={{
          width: '80%', maxWidth: '950px', display: {
            md: 'flex',
            xs: 'none'
          }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }} >
          <Typography variant='h2' sx={{ fontSize: '48px', fontFamily: 'GraphikBold', color: 'white', mb: 4, textShadow: '0px 2px 3px rgb(0 0 0 / 40%), 0px 4px 7px rgb(0 0 0 / 10%), 0px 9px 12px rgb(0 0 0 / 10%)', alignSelf: 'start', ml: 2 }} >
            Find a job. Today.
            {/* {t('Job')} */}
          </Typography>
          <Box sx={{ width: '100%', borderRadius: '12px', boxShadow: '0 2px 20px rgb(0 0 0 / 30%), 0 2px 10px rgb(0 0 0 / 22%)', backgroundColor: 'white', p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box sx={{ width: '40%', height: '60px', mr: 1 }} >
              <input className='SearchFormInputs' type="text" autoComplete='off' style={{ oultine: 'none', fontFamily: 'GraphikRegular', border: 'solid 1px #d6d6dc', color: '#4f4f5c', borderRadius: '12px', padding: '14px', fontSize: '17px', width: '100%', height: '100%' }} placeholder='Which position?' />
            </Box>
            <Box sx={{ width: '40%', height: '60px', mx: 1 }} >
              <input className='SearchFormInputs' type="text" style={{ oultine: 'none', fontFamily: 'GraphikRegular', border: 'solid 1px #d6d6dc', color: '#4f4f5c', borderRadius: '12px', padding: '14px', fontSize: '17px', width: '100%', height: '100%' }} placeholder='Which city?' />
            </Box>
            <Box sx={{ width: '20%', height: '60px', ml: 1 }} >
              <Button variant='contained' sx={{
                borderRadius: '12px', fontSize: '20px', backgroundColor: '#0e54ff', color: 'white', boxShadow: 'none', fontFamily: 'GraphikSemibold', textTransform: 'capitalize', "&:hover": {
                  backgroundColor: '#0e54ff', boxShadow: 'none'
                }, width: '100%', height: '100%'
              }} >
                Find jobs
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Business? */}
        <AnchorLink href='' sx={{
          display: {
            md: 'flex',
            xs: 'none'
          }, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: '12px', left: '50%', transform: 'translate(-50%, -50%)', left: '50%', backgroundColor: 'rgba(255,255,255,.7)', p: 1.5, whiteSpace: 'nowrap', fontSize: '18px', fontFamily: 'GraphikSemibold', borderRadius: '8px', textDecoration: 'none'
        }} >
          <Box component={'span'} sx={{ color: '#000', cursor: "auto", mr: 1 }} >Are you a business?</Box>
          Post a job and hire
        </AnchorLink>
      </Box>
      {/* +++++++++++++++++++++ */}
      {/* For phone */}
      {/* +++++++++++++++++++++ */}
      {/* Search form */}
      <Box sx={{
        width: '100%', display: {
          md: 'none',
          xs: 'flex'
        }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative', p: 2, mt: -10
      }} >
        <Typography variant='h2' sx={{ fontSize: '32px', fontFamily: 'GraphikBold', color: 'white', mb: 6, textShadow: '0px 2px 3px rgb(0 0 0 / 40%), 0px 4px 7px rgb(0 0 0 / 10%), 0px 9px 12px rgb(0 0 0 / 10%)', alignSelf: 'start', }} >
          {/* {t('Job')} */}
          Find a job. Today.
        </Typography>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
          <Box sx={{ width: '100%', height: '60px', }} >
            <input className='SearchFormInputs' type="text" autoComplete='off' style={{ oultine: 'none', fontFamily: 'GraphikRegular', border: 'solid 1px #d6d6dc', color: '#4f4f5c', borderRadius: '12px', padding: '14px', fontSize: '17px', width: '100%', height: '100%' }} placeholder='Which position?' />
          </Box>
          <Box sx={{ width: '100%', height: '60px', my: 2 }} >
            <input className='SearchFormInputs' type="text" style={{ oultine: 'none', fontFamily: 'GraphikRegular', border: 'solid 1px #d6d6dc', color: '#4f4f5c', borderRadius: '12px', padding: '14px', fontSize: '17px', width: '100%', height: '100%' }} placeholder='Which city?' />
          </Box>
          <Box sx={{ width: '100%', height: '64px', }} >
            <Button variant='contained' sx={{
              borderRadius: '12px', fontSize: '20px', backgroundColor: '#0e54ff', color: 'white', boxShadow: 'none', fontFamily: 'GraphikSemibold', textTransform: 'capitalize', "&:hover": {
                backgroundColor: '#0e54ff', boxShadow: 'none'
              }, width: '100%', height: '100%'
            }} >
              Find jobs
            </Button>
          </Box>
          <AnchorLink href='' sx={{ fontSize: '18px', fontFamily: 'GraphikSemibold', textDecoration: 'none', color: '#0e54ff', textAlign: 'center', mt: 2 }} >
            Post a job and hire
          </AnchorLink>
        </Box>
      </Box>
      <Dialog
      className='ProfileDialogueBox'
        open={Profile}
        sx={{ backgroundColor: "none", background: "transparent", borderRadius: '32px' }}
        id={`ProfileDialogueBox`}
      >
        <Box sx={{ width: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '32px', p: 3 }} >
          <Box onClick={handleCloseProfile} sx={{ alignSelf: 'end', cursor: 'pointer' }} >
            <Image src={'/pictures/home/cross.svg'} width={30} height={30} objectFit={'objectfit'} />
          </Box>
        </Box>
      </Dialog>
    </>
  )
}

export default Home;
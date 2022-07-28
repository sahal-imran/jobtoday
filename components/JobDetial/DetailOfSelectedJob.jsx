import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FilterIconBlack from "../../public/pictures/JonDetail/filters-black.svg";
import FilterIconBlue from "../../public/pictures/JonDetail/filters-blue.svg";
import Dialog from '@mui/material/Dialog';
import SwitchButtonWithText from './SwitchButtonWithText';
import CheckBoxWithText from './CheckBoxWithText';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



function DetailOfSelectedJob() {

  const router = useRouter();
  const JobTitle = router.query.jobTitle;


  const [Filter, setFilter] = React.useState(false);
  const handleClickFilter = () => {
    setFilter(true);
  };

  const handleCloseFilter = () => {
    setFilter(false);
  };

  // ++++++
  // Filter
  // ++++++

  const [IsFilterUsed, Set_IsFilterUsed] = useState(false);
  const [Easy_Apply, Set_Easy_Apply] = useState(false);
  const [Part_Time, Set_Part_Time] = useState(false);
  const [Full_Time, Set_Full_Time] = useState(false);
  const [No_experience, Set_No_experience] = useState(false);
  const [Immediate_start, Set_Immediate_start] = useState(false);


  // Languages
  const [English, Set_English] = useState(false);
  const [Spanish, Set_Spanish] = useState(false);
  const [French, Set_French] = useState(false);
  const [Italian, Set_Italian] = useState(false);
  const [German, Set_German] = useState(false);

  const Select_Able_Languagaes = [
    { id: 1, Language: 'English', Current_state: English, OnChange: Set_English, },
    { id: 1, Language: 'Spanish', Current_state: Spanish, OnChange: Set_Spanish, },
    { id: 1, Language: 'French', Current_state: French, OnChange: Set_French, },
    { id: 1, Language: 'Italian', Current_state: Italian, OnChange: Set_Italian, },
    { id: 1, Language: 'German', Current_state: German, OnChange: Set_German, },
  ]


  const Reset = () => {
    handleCloseFilter();
    Set_Easy_Apply(false);
    Set_Full_Time(false);
    Set_Part_Time(false);
    Set_No_experience(false);
    Set_Immediate_start(false);
    Set_English(false);
    Set_Spanish(false);
    Set_French(false);
    Set_Italian(false);
    Set_German(false);
  }

  const [Filters, Set_Filters] = useState([]);

  const Applied_Filters = (e) => {
    e.preventDefault();
    const Filters = {};
    const Languages = {};

    if (Easy_Apply) {
      if (!Filters.hasOwnProperty('EasyApply')) {
        Filters.EasyApply = 'easy-apply';
      }
    }

    if (No_experience) {
      if (!Filters.hasOwnProperty('NoExperience')) {
        Filters.NoExperience = 'no-exoerience';
      }
    }

    if (Immediate_start) {
      if (!Filters.hasOwnProperty('ImmediateStart')) {
        Filters.ImmediateStart = 'immediate-start';
      }
    }

    if (Part_Time) {
      if (!Filters.hasOwnProperty('PartTime')) {
        Filters.PartTime = 'part-time';
      }
    }

    if (Full_Time) {
      if (!Filters.hasOwnProperty('FullTime')) {
        Filters.FullTime = 'full-time';
      }
    }

    if (English) {
      if (!Languages.hasOwnProperty('English')) {
        Languages.English = 'eng';
      }
    }
    if (French) {
      if (!Languages.hasOwnProperty('French')) {
        Languages.French = 'fr';
      }
    }
    if (Spanish) {
      if (!Languages.hasOwnProperty('Spanish')) {
        Languages.Spanish = 'spanish';
      }
    }
    if (Italian) {
      if (!Languages.hasOwnProperty('Italian')) {
        Languages.Italian = 'italian';
      }
    }
    if (German) {
      if (!Languages.hasOwnProperty('German')) {
        Languages.German = 'german';
      }
    }

    if (Easy_Apply || Part_Time || Full_Time || No_experience || Immediate_start || English || Spanish || French || Italian || German) {
      Set_IsFilterUsed(true)
    }
    else {
      Set_IsFilterUsed(false)
    }

    Filters.Languages = Languages;
    Set_Filters(Filters);
    handleCloseFilter();
  }
  // console.log(Filters);



  return (
    <>
      <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }} >

        {/* Filter */}
        <Box sx={{ minWidth: '100%', overflowX: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #d6d6dc', }} >
          <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'start', alignItems: 'center' }} >
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', py: 2 }} >
              <Button onClick={handleClickFilter} variant='outlined' sx={IsFilterUsed === true ? { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #0e54ff', boxShadow: 'unset', textTransform: 'capitalize', display: "flex", justifyContent: 'center', alignItems: 'center', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } } : { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#000', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #d6d6dc', boxShadow: 'unset', textTransform: 'capitalize', display: "flex", justifyContent: 'center', alignItems: 'center', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } }} >
                <Box sx={{ mt: '3px' }} >
                  <Image src={IsFilterUsed === true ? FilterIconBlue : FilterIconBlack} width={24} height={24} objectFit={'contain'} />
                </Box>
                <Box component={'span'} sx={{ ml: 0.6 }} >
                  Filters
                </Box>
              </Button>
              <Button onClick={() => Set_No_experience(!No_experience)} variant='outlined' sx={No_experience ? { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #0e54ff', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } } : { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#000', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #d6d6dc', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } }} >
                No experience
              </Button>
              <Button onClick={() => Set_Full_Time(!Full_Time)} variant='outlined' sx={Full_Time ? { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #0e54ff', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } } : { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#000', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #d6d6dc', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } }} >
                Full-Time
              </Button>
              <Button onClick={() => Set_Part_Time(!Part_Time)} variant='outlined' sx={Part_Time ? { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #0e54ff', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } } : { fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#000', borderRadius: '8px', whiteSpace: 'nowrap', border: '1px solid #d6d6dc', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '46px', mr: 2, "&:hover": { backgroundColor: 'unset', boxShadow: 'unset', border: '1px solid #0e54ff', } }} >
                Part-Time
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>


      {/* Filter Dialog for Desktop */}
      <Dialog
        open={Filter}
        sx={{ display: { md: 'block', xs: 'none' } }}
      >
        <Box sx={{ maxWidth: { md: '650px' }, width: { md: 'unset', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'hidden', borderRadius: '24px' }} >

          {/* Title Bar */}
          <Box sx={{ width: '100%', height: { md: '100px', xs: '60px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', borderBottom: '1px solid #d6d6dc', }} >
            <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikBold', color: '#000' }} >
              Filters
            </Typography>
            {/* Cross icon */}
            <Box onClick={handleCloseFilter} sx={{ cursor: 'pointer', position: 'absolute', top: '18px', right: '24px' }} >
              <Image src={'/pictures/home/cross.svg'} width={24} height={24} objectFit={'objectfit'} />
            </Box>
          </Box>

          {/* Middile content (Filters) */}
          <Box sx={{ width: '100%', minHeight: 'calc(100% - 220px)', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', px: 4 }} >
            {/* Easy Apply */}
            <Box sx={{ mt: { md: 24 }, width: '100%' }} ><SwitchButtonWithText Text={'Easy apply'} Current_state={Easy_Apply} OnChange={Set_Easy_Apply} /></Box>

            {/* Employee Type */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid #d6d6dc', py: 5 }} >
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikSemibold', color: '#000' }} >
                Employment types
              </Typography>
              <Box sx={{ mt: 4 }} ><CheckBoxWithText Text={'Full-Time'} Current_state={Full_Time} OnChange={Set_Full_Time} /></Box>
              <Box sx={{ mt: 4 }} ><CheckBoxWithText Text={'Part-Time'} Current_state={Part_Time} OnChange={Set_Part_Time} /></Box>
            </Box>

            {/* Immediate start */}
            <SwitchButtonWithText Text={'Immediate start'} Current_state={Immediate_start} OnChange={Set_Immediate_start} />

            {/* No Experience */}
            <SwitchButtonWithText Text={'No experience'} Current_state={No_experience} OnChange={Set_No_experience} />

            {/* Languages */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', py: 5 }} >
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikSemibold', color: '#000' }} >
                Languages
              </Typography>
              <Box sx={{ flexGrow: 1, width: '100%', mt: 4 }}>
                <Grid container spacing={4}>
                  {
                    Select_Able_Languagaes.map((Lang, index) => {
                      return <Grid item key={Lang.id} xs={6}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', }} >
                          <CheckBoxWithText Text={Lang.Language} Current_state={Lang.Current_state} OnChange={Lang.OnChange} />
                        </Box>
                      </Grid>
                    })
                  }
                </Grid>
              </Box>
            </Box>
          </Box>

          {/* Bottom button bar */}
          <Box sx={{ width: '100%', height: { md: '120px', xs: '90px' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #d6d6dc', px: 3 }} >
            <Button onClick={() => Reset()} variant='text' sx={{ fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '50px', mr: 2, "&:hover": { backgroundColor: 'rgba(0,0,0,.1)', boxShadow: 'unset', } }} >
              Reset filters
            </Button>
            <Button onClick={(e) => Applied_Filters(e)} variant='text' sx={{ fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: 'white', backgroundColor: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', boxShadow: 'unset', textTransform: 'unset', px: 4, height: '50px', mr: 2, "&:hover": { backgroundColor: '#0e54ff', boxShadow: 'unset', } }} >
              Done
            </Button>
          </Box>
        </Box>
      </Dialog>

      {/* Filter Dialog for Mobile */}
      <Dialog
        open={Filter}
        sx={{ display: { md: 'none', xs: 'block' } }}
        TransitionComponent={Transition}
        fullScreen
      >
        <Box sx={{ maxWidth: { md: '650px' }, width: { md: 'unset', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'hidden', borderRadius: '24px' }} >

          {/* Title Bar */}
          <Box sx={{ width: '100%', height: { md: '100px', xs: '70px' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', borderBottom: '1px solid #d6d6dc',px:3 }} >
            <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikBold', color: '#000' }} >
              Filters
            </Typography>
            {/* Cross icon */}
            <Box onClick={handleCloseFilter} sx={{ cursor: 'pointer' }} >
              <Image src={'/pictures/home/cross.svg'} width={24} height={24} objectFit={'objectfit'} />
            </Box>
          </Box>

          {/* Middile content (Filters) */}
          <Box sx={{ width: '100%', minHeight: 'calc(100% - 180px)', overflowY: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', px: 4 }} >
            {/* Easy Apply */}
            <Box sx={{ mt: { md: 24, xs: 20 }, width: '100%' }} ><SwitchButtonWithText Text={'Easy apply'} Current_state={Easy_Apply} OnChange={Set_Easy_Apply} /></Box>

            {/* Employee Type */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid #d6d6dc', py: 5 }} >
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikSemibold', color: '#000' }} >
                Employment types
              </Typography>
              <Box sx={{ mt: 4 }} ><CheckBoxWithText Text={'Full-Time'} Current_state={Full_Time} OnChange={Set_Full_Time} /></Box>
              <Box sx={{ mt: 4 }} ><CheckBoxWithText Text={'Part-Time'} Current_state={Part_Time} OnChange={Set_Part_Time} /></Box>
            </Box>

            {/* Immediate start */}
            <SwitchButtonWithText Text={'Immediate start'} Current_state={Immediate_start} OnChange={Set_Immediate_start} />

            {/* No Experience */}
            <SwitchButtonWithText Text={'No experience'} Current_state={No_experience} OnChange={Set_No_experience} />

            {/* Languages */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', py: 5 }} >
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikSemibold', color: '#000' }} >
                Languages
              </Typography>
              <Box sx={{ flexGrow: 1, width: '100%', mt: 4 }}>
                <Grid container spacing={4}>
                  {
                    Select_Able_Languagaes.map((Lang, index) => {
                      return <Grid item key={Lang.id} xs={6}>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', }} >
                          <CheckBoxWithText Text={Lang.Language} Current_state={Lang.Current_state} OnChange={Lang.OnChange} />
                        </Box>
                      </Grid>
                    })
                  }
                </Grid>
              </Box>
            </Box>
          </Box>

          {/* Bottom button bar */}
          <Box sx={{ width: '100%', height: { md: '120px', xs: '90px' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #d6d6dc', px: 3 }} >
            <Button onClick={() => Reset()} variant='text' sx={{ fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', boxShadow: 'unset', textTransform: 'unset', px: 2, height: '50px', mr: 2, "&:hover": { backgroundColor: 'rgba(0,0,0,.1)', boxShadow: 'unset', } }} >
              Reset filters
            </Button>
            <Button onClick={(e) => Applied_Filters(e)} variant='text' sx={{ fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikRegular', color: 'white', backgroundColor: '#0e54ff', borderRadius: '8px', whiteSpace: 'nowrap', boxShadow: 'unset', textTransform: 'unset', px: 4, height: '50px', mr: 2, "&:hover": { backgroundColor: '#0e54ff', boxShadow: 'unset', } }} >
              Done
            </Button>
          </Box>
        </Box>
      </Dialog>

    </>
  )
}

export default DetailOfSelectedJob
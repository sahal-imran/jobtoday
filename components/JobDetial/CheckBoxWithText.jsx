import Check from "../Common/Check";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";

function CheckBoxWithText({ Text, Current_state, OnChange }) {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <Check Current_state={Current_state} OnChange={OnChange} />
        <Typography onClick={() => OnChange(!Current_state)} variant='h2' sx={{ fontSize: '18px', lineHeight: '24px', fontFamily: 'GraphikRegular', color: '#000', ml: 3,cursor: 'pointer' }} >
          {Text}
        </Typography>
      </Box>
    </>
  )
}

export default CheckBoxWithText
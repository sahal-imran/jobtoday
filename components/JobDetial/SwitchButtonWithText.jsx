import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import IOSSwitch from '../Common/IOSSwitch';

function SwitchButtonWithText({ Text ,Current_state, OnChange }) {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,.1)', py: 4 }} >
                <Typography onClick={() => OnChange(!Current_state)} variant='h2' sx={{ fontSize: '18px', lineHeight: '24px', fontFamily: 'GraphikRegular', color: '#000', cursor: 'pointer' }} >
                    {Text}
                </Typography>
                <IOSSwitch Current_state={Current_state} OnChange={OnChange} />
            </Box>
        </>
    )
}

export default SwitchButtonWithText
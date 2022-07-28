import Checkbox from '@mui/material/Checkbox';

function Check({ Current_state, OnChange }) {
    return (
        <>
            <Checkbox
                checked={Current_state}
                onChange={(e) => OnChange(e.target.checked)}
                // inputProps={{ 'aria-label': 'controlled' }}
                size='large'
                sx={{ width: '24px', height: '24px', p: 0}}
            />
        </>
    )
}

export default Check;
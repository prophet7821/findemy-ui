// 
import React from 'react'
import { Button ,styled} from '@mui/material';

const SocialLoginButtons = styled(Button)({
    border: '1px solid #000',
    borderRadius:'none',
    '&:hover':{
        backgroundColor: 'rgba(0,0,0,0.04)'
    }
})

export default SocialLoginButtons
import React from "react";
import { CardPrimary, ToggleWrapper, Typography } from "../styles/styled";
import Switch from '@mui/material/Switch';

type balanceProp = {
    balance: number
}

const Balance: React.FC<balanceProp> = ({balance}:balanceProp) => {
    const [show, setShow] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShow(!show);
    }; 
    return <CardPrimary>
        {show && <div style={{
            position: 'absolute',
            top: 0,
            left: 10,
            textAlign:'start',
            display:'flex',
            gap:'15px',
            color: 'white'
        }}>
            <div>
                <Typography>
                    My balance
                </Typography>
                <Typography style={{fontWeight:'bold'}}>
                    ${balance}
                </Typography>
            </div>            
            <div>
                <Typography>
                    My daily budget
                </Typography>
                <Typography style={{fontWeight:'bold'}}>
                    $50
                </Typography>
            </div>
        </div>}
        
        <ToggleWrapper>
            <Switch
                checked={show}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </ToggleWrapper>
    </CardPrimary>
}

export default Balance;
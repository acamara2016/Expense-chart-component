import React from 'react';
import styled from 'styled-components';
import { Typography } from '../styles/styled';

interface Props {
    expense: number;
    max: number;
    day: string;
}

const BarElement = styled.div<Props>`
    width: 40px;
    cursor: pointer;
    border-radius: 10px;
    height: ${props => props.expense * 2.5}px;
    background-color: ${props => props.expense < props.max ? 'hsl(10,79%,65%)': 'hsl(186, 34%, 60%)'};
    &:hover{
        background-color: ${props => props.expense < props.max ? 'hsl(10,79%,65%)': 'hsl(186, 34%, 60%)'};
    }
`;
const ToolTip = styled.div` 
    font-size: 12px;
    background-color: hsl(32deg 2% 23%);
    width: 40px;
    & > span {
        color: white;
    }
`;
const BarWrapper = styled.div` 
    display: block;
    position: relative;
`;

const Bar = ({expense, max, day}:Props) => {
    const [showDetail, setShowDetail] = React.useState(false);

    return(
        <BarWrapper>
            <Typography style={{fontSize:'12px'}}>${expense}</Typography>
            <div style={{
                position: 'absolute',
                bottom: 0,
                width:'-webkit-fill-available',
            }}>
                <div>
                    {showDetail && <ToolTip>
                        <span>
                            {expense > 50 ? `You are $${(expense-50).toFixed(2)} over daily limit` : `You have $${(50-expense).toFixed(2)} left in your daily limit`}
                        </span>
                    </ToolTip>}
                    <BarElement 
                        onClick={()=>setShowDetail(!showDetail)}
                        onMouseEnter={()=>setShowDetail(true)}
                        onMouseLeave={()=>setShowDetail(false)}
                        expense={expense}
                        max={max} 
                        day={day}
                    ></BarElement>
                </div>
                <Typography>{day}</Typography>
            </div>
        </BarWrapper>
    )
};

export default Bar;
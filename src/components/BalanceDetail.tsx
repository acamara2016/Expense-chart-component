import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { getMax } from '../hooks/useExpenses';
import {CardLight} from '../styles/styled';
import Bar from './Bar';
type detailProps = {
    expenses: any[]
}

interface GripProps {
    max: number;
}
interface Expense{
    day: string;
    amount: number;
}
const max = getMax();

const Graph = styled.div<GripProps>` 
    display: flex;
    justify-content: space-around;
    height: ${props=> props.max+200+"px"};
`;
const HR = styled.hr`
    width: 300px;
`;

const BalanceDetail: React.FC<detailProps> =(expenses,{expenses:detailProps})=>{
    return <CardLight>
        <Typography style={{
            textAlign: 'start',
            fontWeight: 'bold',
            padding: '10px 0px 10px 5px'
        }}>
            Spending - Last 7 days
        </Typography>
        <Graph max={max}>
            {expenses.expenses.map((expense:Expense)=>(
                <Bar 
                    key={expense.day}
                    expense={expense.amount}
                    day={expense.day}
                    max={max}
                />
            ))}
        </Graph>
        <HR/>
        <div style={{
            position: 'relative',
            height: '100px'
        }}>
            <div style={{
                position:'absolute',
                top: 5,
                left: 20,
                textAlign:'start'
            }}>
                <Typography>
                    Total this month
                </Typography>
                <Typography style={{
                    fontSize:'40px',
                    fontWeight:'700'
                }}>
                    $478
                </Typography>
            </div>
            <div style={{
                position:'absolute',
                right: 20,
                bottom: 10,
                textAlign:'end'
            }}>
                <Typography style={{fontWeight:'bold'}}>
                    +2.43%
                </Typography>
                <Typography>
                    from last month
                </Typography>
            </div>
        </div>
    </CardLight>
};

export default BalanceDetail;
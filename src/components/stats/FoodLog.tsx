import React, { useState } from 'react';
import DailyStatsSection from './DailyStatsSection';
import { Paper, Table } from '@mui/material';
import FoodLogHeader from './FoodLogHeader';
import FoodLogRow from './FoodLogRow';

export type Intake = {
    name: string;
    quantity: number;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
};

const FoodLog: React.FC = () => {
    const [log] = useState<Intake[]>([
        {
            name: 'Grapes',
            quantity: 1,
            calories: 100,
            protein: 1,
            carbs: 25,
            fat: 0,
        },
        {
            name: 'Bananas',
            quantity: 1,
            calories: 100,
            protein: 1,
            carbs: 25,
            fat: 0,
        },
        {
            name: 'Ear',
            quantity: 1,
            calories: 100,
            protein: 1,
            carbs: 25,
            fat: 0,
        },
    ]);

    return (
        <DailyStatsSection sx={{ height: '100%' }}>
            <Table stickyHeader component={Paper}>
                <FoodLogHeader />
                {log.map((intake: Intake, key: number) => {
                    return <FoodLogRow key={key} intake={intake} />;
                })}
            </Table>
        </DailyStatsSection>
    );
};

export default FoodLog;

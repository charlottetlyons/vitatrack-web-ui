import React, { useState } from 'react';
import DailyStatsSection from './DailyStatsSection';
import { Paper, Table } from '@mui/material';
import FoodLogHeader from './FoodLogHeader';
import FoodLogRow from './FoodLogRow';
import cob from '../../../assets/cob.jpg';
import ear from '../../../assets/ear.jpg';
import grapejpg from '../../../assets/grapejpg.jpg';

export type Intake = {
    name: string;
    quantity: number;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    imageSrc?: string;
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
            imageSrc: grapejpg,
        },
        {
            name: 'Corn',
            quantity: 1,
            calories: 100,
            protein: 1,
            carbs: 25,
            fat: 0,
            imageSrc: cob,
        },
        {
            name: 'Ear',
            quantity: 1,
            calories: 100,
            protein: 1,
            carbs: 25,
            fat: 0,
            imageSrc: ear,
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

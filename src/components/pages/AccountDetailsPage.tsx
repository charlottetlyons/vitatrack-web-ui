import React from 'react';
import { InternalPage } from './templates/InternalPage';
import { Grid, Paper, Typography } from '@mui/material';
import PrimaryButton from '../buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const AccountDetailsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <InternalPage>
            <Paper>
                <Grid container direction="column" alignContent="center">
                    <Grid item>
                        <Typography variant="h1">Account Details</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">First Name:</Typography>
                        <Typography variant="body1">Last Name:</Typography>
                        <Typography variant="body1">Email Address:</Typography>
                        <Typography variant="body1">Phone:</Typography>
                    </Grid>
                    <Grid item>
                        <PrimaryButton
                            text={'Change Password'}
                            onClick={() =>
                                navigate('/vitatrack/external/reset-password')
                            }
                            sx={{
                                width: '25%',
                            }}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </InternalPage>
    );
};

export default AccountDetailsPage;

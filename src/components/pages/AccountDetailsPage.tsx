import PrimaryButton from '../buttons/PrimaryButton';
import React from 'react';
import { Grid, Paper, styled, Typography } from '@mui/material';
import { InternalPage } from './templates/InternalPage';
import { useNavigate } from 'react-router-dom';
import MenuButton from '../buttons/MenuButton';

const StyledOuterPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
}));

const StyledInnerPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.secondary,
    margin: theme.spacing(2),
}));

const AccountDetailsPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <InternalPage>
            <Grid
                container
                direction="column"
                sx={{
                    position: 'absolute',
                    margin: 'auto',
                    top: '50%',
                    width: '30%',
                    transform: 'translateY(-70%) translateX(115%)',
                }}
            >
                <StyledOuterPaper>
                    <Grid item container direction="column">
                        <Grid container item justifyContent="center">
                            <Typography variant="h2">
                                Account Details
                            </Typography>
                        </Grid>
                        <Grid item>
                            <StyledInnerPaper>
                                <Typography variant="body2">
                                    First Name:
                                </Typography>
                                <Typography variant="body2">
                                    Last Name:
                                </Typography>
                                <Typography variant="body2">
                                    Email Address:
                                </Typography>
                                <Typography variant="body2">Phone:</Typography>
                            </StyledInnerPaper>
                        </Grid>
                        <Grid container item justifyContent="center">
                            <PrimaryButton
                                text={'Change Password'}
                                onClick={() =>
                                    navigate(
                                        '/vitatrack/external/reset-password',
                                    )
                                }
                            />
                        </Grid>
                    </Grid>
                    <MenuButton
                        sx={{
                            backgroundColor: 'grey',
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                        }}
                    />
                </StyledOuterPaper>
            </Grid>
        </InternalPage>
    );
};

export default AccountDetailsPage;

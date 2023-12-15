import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import getConfig from 'next/config';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../redux/auth/auth-admin-slice';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useRouter } from 'next/router';


const HelloWorld: React.FC = () => {


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // if (validate()) {
        //     // const resp: ResponseType = await dispatch(postLogin({ username: username, password: password }));
        //     // resp.error ? setShowError(true) : redirectToDashboardRoute();
        // } else {
        //     console.log('Form is invalid');
        // }
    };

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card sx={{ minWidth: 500 }}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                            Spak Admin
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '45ch' },
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                error={!!errors.username}
                                helperText={errors.username}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            {showError && <p>Invalid Username and Password</p>}
                            <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>Login</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
};

export default HelloWorld;
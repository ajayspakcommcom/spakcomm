import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export default function Index() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });

    const isValidEmail = (username: string): boolean => {
        // Simple regex for username validation
        return /\S+@\S+\.\S+/.test(username);
    };

    const validate = () => {
        let tempErrors = { username: '', password: '' };
        let isValid = true;

        if (!username) {
            tempErrors.username = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(username)) {
            tempErrors.username = 'Email is not valid';
            isValid = false;
        }

        if (!password) {
            tempErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (validate()) {
            console.log('Form is valid');

            const apiUrl = `${publicRuntimeConfig.API_URL}auth`;



            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: username, password: password }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('API response:', data);
                } else {
                    console.error('API error:', response.statusText);
                }
            } catch (error) {
                console.error('API call error:', error);
            }

        } else {
            console.log('Form is invalid');
        }
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
                            <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>Login</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

        </>
    );
}
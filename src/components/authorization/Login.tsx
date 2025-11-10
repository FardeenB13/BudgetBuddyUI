import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} sx={{ p: 4, width: 400 }}>
                <Typography variant="h5" textAlign="center" mb={2}>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Login
                    </Button>
                    <Typography textAlign="center" sx={{ mt: 2 }}>
                        First time using BudgetBuddy? <a href="/signup">Sign up</a>
                    </Typography>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;

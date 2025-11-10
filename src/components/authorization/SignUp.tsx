import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const Signup = () => {
    const [form, setForm] = useState({ email: '', password: '', confirm: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} sx={{ p: 4, width: 400 }}>
                <Typography variant="h5" textAlign="center" mb={2}>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        margin="normal"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    /><TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                   
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Sign Up
                    </Button>
                    <Typography textAlign="center" sx={{ mt: 2 }}>
                        Already have a BudgetBuddy account? <a href="/login">Login</a>
                    </Typography>
                </form>
            </Paper>
        </Box>
    );
};

export default Signup;

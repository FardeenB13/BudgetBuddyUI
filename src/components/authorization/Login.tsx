import { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Link as MuiLink} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL}/api/users/login`, {
                email,
                password
            });

            console.log("Login success:", response.data);

            alert("Login successful!");

            // Save token (if you want for auth)
            localStorage.setItem("token", response.data.token);

            // Redirect to dashboard
            window.location.href = "/dashboard";

        } catch (err: unknown) {
            // This replaces `catch (err: any)` so ESLint doesn't complain
            if (axios.isAxiosError(err)) {
                console.error(err.response?.data || err.message);
                alert(err.response?.data?.message || "Login failed.");
            } else {
                console.error(err);
                alert("Unexpected error occurred.");
            }
        }
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
                        First time using BudgetBuddy? {" "}
                        <MuiLink 
                        component={RouterLink}
                        to="/signup"
                        color="secondary.main"
                        underline="hover"
                        sx={{ fontWeight: 500}}
                        >
                            Sign up
                        </MuiLink>
                    </Typography>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;

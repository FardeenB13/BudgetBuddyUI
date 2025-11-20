import { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Link as MuiLink} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${API_URL})/api/users/signup`, {
                fname: form.fname,
                lname: form.lname,
                email: form.email,
                password: form.password,  
            });

            console.log("Signup success:", response.data);
            alert("Account created!");
            window.location.href = "/login";
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                console.error(err.response?.data || err.message);
                alert(err.response?.data?.message || "Signup failed.");
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
                    Sign Up
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="First Name"
                        margin="normal"
                        value={form.fname}
                        onChange={(e) => setForm({ ...form, fname: e.target.value })}
                    />

                    <TextField
                        fullWidth
                        label="Last Name"
                        margin="normal"
                        value={form.lname}
                        onChange={(e) => setForm({ ...form, lname: e.target.value })}
                    />

                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        margin="normal"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
                        Sign Up
                    </Button>

                    <Typography textAlign="center" sx={{ mt: 2 }}>
                        Already have an account?  {" "}
                        <MuiLink 
                            component={RouterLink}
                            to="/login"
                            color="secondary.main"
                            underline="hover"
                            sx={{ fontWeight: 500}}
                        >
                        Login
                        </MuiLink>
                    </Typography>
                </form>
            </Paper>
        </Box>
    );
};

export default Signup;

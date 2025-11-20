import { Box, Button, Typography, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Welcome = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{
                backgroundColor: "background.default",
            }}
        >
            <Paper
                elevation={4}
                sx={{
                    p: 5,
                    width: 450,
                    textAlign: "center",
                    borderRadius: 3,
                    backgroundColor: "background.paper",
                }}
            >
                <img
                    src="/src/assets/budgetbuddy-logo.png"   // <— replace with your actual logo path
                    style={{
                        width: 130,
                        marginBottom: 20,
                    }}
                />
                <Typography variant="h4" mb={1} fontWeight={600}>
                    BudgetBuddy
                </Typography>
                <Typography variant="subtitle1" mb={4} color="text.secondary">
                    Your Finances in Check
                </Typography>
                <Button
                    component ={RouterLink}
                    to = "/login"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2 , py: 1.2}}
                    >
                        Login
                    </Button>
                <Button
                    component={RouterLink}
                    to="/login"
                    fullWidth
                    variant="contained"
                    sx={{ mb: 2, py: 1.2 }}
                >
                    Signup
                </Button>
            </Paper>
        </Box>
    );
};

export default Welcome;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from "@mui/material";


export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("userPhone");
    if (saved) navigate("/main");
  }, [navigate]);

  const handleSubmit = () => {
    if (!phone.startsWith("+254")) return setError("Phone must start with +254");
    if (phone) navigate("/main");
    else setError("Invalid phone number");
  };

  useEffect(() => {
    if (phone && phone.startsWith("+254")) {
      localStorage.setItem("userPhone", phone);
      setError("");
    }
  }, [phone]);

  return (
    <Container maxWidth="sm">
      <Box mt={10} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5">Login</Typography>
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
    </Container>
  );
}

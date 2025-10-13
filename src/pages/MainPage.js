import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPosts } from "../services/api/api";
import { Container, TextField, List, ListItem, Typography, CircularProgress, Button, Box } from "@mui/material";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("userPhone");
    if (!saved) return navigate("/");
    setPhone(saved);

    getPosts()
      .then((res) => setPosts(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4} mb={2}>
        <Typography variant="h5">Posts</Typography>
        <Box display="flex" alignItems="center" gap={2}>
          {phone && <Typography variant="body2">{phone}</Typography>}
          <Button variant="outlined" color="secondary" onClick={() => { localStorage.removeItem("userPhone"); navigate('/'); }}>
            Logout
          </Button>
        </Box>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        label="Search posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <CircularProgress sx={{ mt: 4 }} />
      ) : (
        <List>
          {filtered.map((p) => (
            <ListItem key={p.id} component={Link} to={`/detail/${p.id}`} button>
              {p.title}
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

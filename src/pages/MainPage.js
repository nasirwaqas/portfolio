import { useEffect, useState } from "react";
import { getPosts } from "../services/api/api";
import { Link } from "react-router-dom";
import { Container, TextField, List, ListItem, Typography, CircularProgress } from "@mui/material";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container>
      <Typography variant="h5" mt={4} mb={2}>Posts</Typography>
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

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../services/api/api";
import { Container, Typography, Button,CircularProgress } from "@mui/material";

export default function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <CircularProgress sx={{ mt: 4 }} />;

  return (
    <Container>
      <Typography variant="h5" mt={4}>{post.title}</Typography>
      <Typography mt={2}>{post.body}</Typography>
      <Button component={Link} to="/main" variant="contained" sx={{ mt: 3 }}>
        Back to Main
      </Button>
    </Container>
  );
}

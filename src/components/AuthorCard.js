import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    data && (
      <Card>
        <CardContent
          component={Stack}
          spacing={1}
          sx={{ alignItems: "center" }}
        >
          <Avatar
            alt={data?.name}
            src={data?.url}
            sx={{ width: 56, height: 56 }}
          />
          <Typography sx={{ fontSize: 20, color: "rgba(0,0,0,.5)" }} color="text.secondary" gutterBottom>
            {data?.name ?? "--"}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            disabled={!data?.id}
            size="small"
            variant="contained"
            onClick={() => navigate(`profile/${data.id}`)}
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            View Profile
          </Button>
        </CardActions>
      </Card>
    )
  );
};

export default AuthorCard;

import React from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PostRow = ({data}) => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        height: 50,
        cursor: "pointer",
        mt: 1,
        borderRadius: 1,
        border: "1px solid rgba(0,0,0,.125)",
        justifyContent: "space-between",
        px: 2.5,
        "&:active":{
            opacity: 0.6
        }
      }}
      onClick={() => {
        if(data?.id){
          navigate(`/post/${data.id}`)
        }
      }}
    >
      <Typography sx={{ fontWeight: "bold", flex: 3 }}>{data?.postName}</Typography>
      <Typography
        color="#17a2b8"
        sx={{ flex: 1, textAlign: "right" }}
        fontWeight={500}
      >
        {data?.formattedCreatedAt}
      </Typography>
      <Typography
        color="#dc3545"
        sx={{ flex: 1, textAlign: "right" }}
        fontWeight={500}
      >
        {data?.subInfo}
      </Typography>
    </Stack>
  );
};

export default PostRow;

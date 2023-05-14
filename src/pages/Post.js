import { Stack, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../layout/MainLayout";

const Post = () => {
  return (
    <MainLayout>
      <Stack alignItems="center" spacing={2} bgcolor="rgba(0,0,0,.8)" color="#fff" p={2} width="100%">
        <Typography variant="h4" fontWeight="bold" textTransform="capitalize">empower Versatile support</Typography>
        <Typography paragraph textAlign="justify">
          Omnis magnam porro doloremque quaerat qui qui. Natus explicabo
          architecto quis voluptatibus vero fugit expedita. Quia cupiditate eos
          dolores mollitia quia ut adipisci. Voluptates fuga alias enim quidem.
          Repellat eligendi excepturi consequatur ut aut. Sit dolorum et sunt
          incidunt. Soluta voluptas maiores explicabo sunt. Ex illo quidem est
          distinctio iusto beatae repellat doloribus. Dolorem corrupti tempora
          suscipit ratione nobis assumenda facilis. Explicabo molestias sit eum
          veritatis ipsa sint inventore iusto. Quae velit quam aut dolor.
          Consequatur possimus enim sint ut ut sapiente vel quis eos. Tenetur
          enim accusamus hic sunt. Quibusdam quasi sit consectetur molestiae
          eveniet vitae autem ut. Ut corporis dolor et consequatur eius fugit
          culpa consequuntur. Atque veritatis animi ut. Voluptate eligendi
          dolorem vitae temporibus voluptate voluptatibus. Id tempora et
          occaecati vel delectus mollitia aut nobis nam. Dolorem qui aperiam
          veniam voluptatem omnis. Labore voluptatem assumenda libero qui aut
          iusto accusantium molestias. Dolore rerum nihil esse minima est. Et
          numquam reiciendis odit. Et optio nisi nesciunt. Exercitationem
          commodi et eos ea. Veritatis et deleniti soluta fuga quidem
          architecto. Voluptate enim deserunt iure sint quaerat quis voluptatem
          non.
        </Typography>
        <Typography color="#6c757d">Date : 11/27/2019</Typography>
        <Typography>Author : Santina Frami</Typography>
        <Typography>LIKES : 6</Typography>
      </Stack>
    </MainLayout>
  );
};

export default Post;

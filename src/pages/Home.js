import { Box, Grid, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { AuthorCard } from "../components";
import MainLayout from "../layout/MainLayout";

const MOCK_DATA = [
  { id: 1, name: "Dinh", url: "https://picsum.photos/200/300" },
  { id: 2, name: "Tran", url: "https://picsum.photos/200/300" },
  { id: 3, name: "Son", url: "https://picsum.photos/200/300" },
  { id: 4, name: "Mai", url: "https://picsum.photos/200/300" },
];

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <MainLayout>
      <Stack alignItems="center" height="100%">
        <Box sx={{ flex: 1, width: "100%" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {MOCK_DATA.map((author, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <AuthorCard data={author} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Pagination
          sx={{ mt: 2 }}
          count={Math.ceil(MOCK_DATA.length / ITEMS_PER_PAGE)}
          onChange={handleChangePage}
          page={page}
          showFirstButton
          showLastButton
        />
      </Stack>
    </MainLayout>
  );
};

Home.propTypes = {};

export default Home;

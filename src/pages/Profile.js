import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { PostRow } from "../components";
import AuthorInfo from "../components/AuthorInfo";
import MainLayout from "../layout/MainLayout";

const MOCK_DATA = [
  {
    id: 1,
    postName: "12312",
    formattedCreatedAt: "12/10/2019",
    subInfo: "Likes 10",
  },
  {
    id: 2,
    postName: "wer",
    formattedCreatedAt: "12/10/2020",
    subInfo: "Likes 10",
  },
  {
    id: 3,
    postName: "12sasaa",
    formattedCreatedAt: "12/10/2021",
    subInfo: "Likes 10",
  },
];

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <AuthorInfo name="Dinh" urlAvatar="asdasd" mobile="123-123-123" postCount={22} likeCount={12}/>
      <Typography variant="h5" fontWeight="bold">
        Posts
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="full width tabs example"
        variant="fullWidth"
      >
        <Tab label="Assending By Date" {...a11yProps(0)} />
        <Tab label="Decending By Date" {...a11yProps(1)} />
        <Tab label="Assending By Like" {...a11yProps(2)} />
        <Tab label="Decending By Like" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {MOCK_DATA.map((post) => (
          <PostRow data={post} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {MOCK_DATA.map((post) => (
          <PostRow data={post} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {MOCK_DATA.map((post) => (
          <PostRow data={post} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {MOCK_DATA.map((post) => (
          <PostRow data={post} />
        ))}
      </TabPanel>
    </MainLayout>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Profile;

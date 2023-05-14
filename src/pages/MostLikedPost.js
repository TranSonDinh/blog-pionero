import React from "react";
import { PostRow } from "../components";
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

const MostLikedPost = () => {
  return (
    <MainLayout>
      {MOCK_DATA.map((post, index) => (
        <PostRow data={post} key={index}/>
      ))}
    </MainLayout>
  );
};

MostLikedPost.propTypes = {};

export default MostLikedPost;

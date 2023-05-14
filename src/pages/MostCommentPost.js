import React from 'react'
import { PostRow } from '../components';
import MainLayout from '../layout/MainLayout'

const MOCK_DATA = [
  {
    id: 1,
    postName: "12312",
    formattedCreatedAt: "12/10/2019",
    subInfo: "Comments 10",
  },
  {
    id: 2,
    postName: "wer",
    formattedCreatedAt: "12/10/2020",
    subInfo: "Comments 10",
  },
  {
    id: 3,
    postName: "12sasaa",
    formattedCreatedAt: "12/10/2021",
    subInfo: "Comments 10",
  },
];

const MostCommentPost = () => {
  return (
    <MainLayout>
      {MOCK_DATA.map((post) => (
        <PostRow data={post} />
      ))}
    </MainLayout>
  )
}

export default MostCommentPost

/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import postData from "./earned.json";
import TableData from "./TableData";

function App() {
  const [postsData, setPostData] = useState([]);

  const getData = async () => {
    setPostData(postData.data.postsConnection.edges);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Post</TableCell>
            <TableCell align="center">Post Image</TableCell>
            <TableCell align="center">Likes Count</TableCell>
            <TableCell align="center">Comments Count</TableCell>
            <TableCell align="center">Total Engagement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...postsData]
            .sort(function (a, b) {
              return (
                b.node["comments_count"] +
                b.node["likes_count"] -
                (a.node["comments_count"] + a.node["likes_count"])
              );
            })
            .map((data) => {
              return <TableData data={data} />;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;

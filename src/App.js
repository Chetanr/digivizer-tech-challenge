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
import PanoramaIcon from "@material-ui/icons/Panorama";
import postData from "./earned.json";

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
              return (
                <TableRow key={data.node["post"]}>
                  <TableCell align="left">
                    {data.node["handle_history"].name}
                  </TableCell>
                  <TableCell align="left">{data.node["date"]}</TableCell>
                  <TableCell align="left">{data.node["post"]}</TableCell>
                  <TableCell align="left">
                    <img
                      src={data.node["image_url"]}
                      alt={PanoramaIcon}
                      width="100px"
                      height="100px"
                      thumbnail
                    />
                  </TableCell>
                  <TableCell align="left">{data.node["likes_count"]}</TableCell>
                  <TableCell align="left">
                    {data.node["comments_count"] > 0
                      ? data.node["comments_count"]
                      : "0"}
                  </TableCell>
                  <TableCell align="left">
                    {data.node["comments_count"] + data.node["likes_count"]}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;

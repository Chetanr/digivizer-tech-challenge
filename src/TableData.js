/* eslint-disable jsx-a11y/img-redundant-alt */
import { TableCell, TableRow } from "@material-ui/core";

function TableData(props) {
  return (
    <TableRow key={props.data.node["post"]}>
      <TableCell align="left">
        {props.data.node["handle_history"].username}
      </TableCell>
      <TableCell align="left">{props.data.node.date}</TableCell>
      <TableCell align="left">{props.data.node["post"]}</TableCell>
      <TableCell align="left">
        <img
          src={props.data.node["image_url"]}
          alt="Image"
          width="100px"
          height="100px"
          thumbnail
        />
      </TableCell>
      <TableCell align="left">{props.data.node["likes_count"]}</TableCell>
      <TableCell align="left">
        {props.data.node["comments_count"] > 0
          ? props.data.node["comments_count"]
          : "0"}
      </TableCell>
      <TableCell align="left">
        {props.data.node["comments_count"] + props.data.node["likes_count"]}
      </TableCell>
    </TableRow>
  );
}

export default TableData;

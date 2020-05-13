import React from "react";
import {
  Card,
  TableCell,
  Table,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Card>
          <TableContainer component={Paper}>
            <Table className="" aria-label="simple table">
              <TableHead style={{ background: "darksalmon" }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.dashboardDetails.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phoneNo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </>
    );
  }
}
const mapStateToProps = (items) => ({
  dashboardDetails: items.dashboardDetails,
});

export default connect(mapStateToProps, {})(Dashboard);

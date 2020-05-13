import React from "react";
import { Button, TextField, Card } from "@material-ui/core";
import _ from "lodash";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLoginDetails } from "./action";
const styles = () => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "300px",
    width: "400px",
    padding: "24px",
  },
  textFields: {
    padding: "12px",
  },
  button: {
    width: "100px",
    justifyContent: "center",
    marginTop: "24px",
    alignSelf: "center",
  },
  invalid: {
    color: "red",
    alignSelf: "start",
    padding: "12px",
    fontSize: "12px",
  },
});
class Login extends React.Component {
  state = {
    formData: "",
  };
  onChange = (e) => {
    this.setState({
      formData: _.set(
        { ...this.state.formData },
        e.target.name,
        e.target.value
      ),
    });
  };
  onClickLogin = () => {
    const { formData } = this.state;
    if (formData.username !== "" && formData.password !== "") {
      this.props.getLoginDetails(formData);
    }
  };
  render() {
    const { classes, loginData } = this.props;
    const { formData } = this.state;

    if (loginData === "success") {
      return <Redirect to="/dashboard" />;
    }
    return (
      <>
        <Card className={classes.card}>
          <TextField
            required
            error={formData.username === ""}
            className={classes.textFields}
            onChange={this.onChange}
            id="standard-required"
            name="username"
            label=""
            helperText={formData.username === "" && "please enter username"}
            placeholder="Please enter username"
          />
          <TextField
            error={formData.password === ""}
            type="password"
            onChange={this.onChange}
            name="password"
            className={classes.textFields}
            id="standard-required"
            placeholder="Please enter password"
            helperText={formData.password === "" && "please enter password"}
            label=""
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.onClickLogin}
            color="secondary"
          >
            Login
          </Button>
          {loginData !== "success" && (
            <div className={classes.invalid}>{loginData}</div>
          )}
        </Card>
      </>
    );
  }
}
const mapStateToProps = (items) => ({ loginData: items.loginData });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getLoginDetails,
    },
    dispatch
  );
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);

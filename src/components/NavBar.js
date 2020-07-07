import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/user";
import { Drawer, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, ListItemAvatar } from "@material-ui/core";
import GraphicEqRoundedIcon from "@material-ui/icons/GraphicEqRounded";

const Nav = styled(NavLink)({
  color: "white",
  textDecoration: "none",
  backgroundColor: "rgba(0,0,0,0)",
  "&:hover": {
    background: "rgba(255,255,255,0.2)",
  },
  borderRadius: "100px",
});

const useStyles = makeStyles({
  paper: {
    background: "linear-gradient(to right, #414141, #000000)",
    width: "230px",
    borderRadius: "10px",
  },
  main: {
    color: "white",
    marginTop: "70px",
    marginLeft: "15px",
    color: "#1DB954",
    padding: "20px",
    fontSize: "1.1em",
  },
  nested: {
    color: "white",
    marginLeft: "40px",
    padding: "10px",
  },
  icon: {
    paddingRight: "10px",
    verticalAlign: "middle",
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      classes={{ paper: classes.paper }}
      anchor="left"
      variant="permanent"
    >
      <Typography variant="button" className={classes.main}>
        Discover
      </Typography>
      <Nav to="/homepage">
        <Typography variant="body1" className={classes.nested}>
          <SearchIcon className={classes.icon} />
          Search
        </Typography>
      </Nav>
      <br />
      <br />
      <br />
      <br />
      <Typography variant="button" className={classes.main}>
        My Account
        {/* <Avatar
          src={props.user.user.profile_img_url}
          alt="Account Picture"
          component="span"
        /> */}
      </Typography>
      <Nav to="/bookmarks">
        <Typography variant="body1" className={classes.nested}>
          <CollectionsBookmarkIcon className={classes.icon} />
          My Bookmarks
        </Typography>
      </Nav>
      <Nav to="/episodes">
        <Typography variant="body1" className={classes.nested}>
          <GraphicEqRoundedIcon className={classes.icon} />
          My Episodes
        </Typography>
      </Nav>
      <Nav to="/login" onClick={props.logoutUser}>
        <Typography variant="body1" className={classes.nested}>
          <ExitToAppIcon className={classes.icon} />
          Logout
        </Typography>
      </Nav>
    </Drawer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps, { logoutUser })(NavBar);

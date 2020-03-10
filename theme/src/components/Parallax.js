import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container, Hidden } from "@material-ui/core";
import Link from "./Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Image from "../assets/Avatar.inline.svg";
import Background from "../assets/Background.svg";
import "./waving-hand.css";

const useStyles = makeStyles(theme => ({
  root: {
    background: `url(${Background})`,
    backgroundPosition: "top right",
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "local",
    overflow: "hidden",
  },
  text: {
    background: "rgba(250, 250, 250, 0.5)",
  },
}));

function renderIcon(name) {
  let icon;
  switch (name) {
    case "github":
      icon = <GitHubIcon color="primary" fontSize="small" />;
      break;
    case "linkedin":
      icon = <LinkedInIcon color="primary" fontSize="small" />;
      break;
    case "email":
      icon = <MailOutlineIcon color="primary" fontSize="small" />;
      break;
    default:
      break;
  }
  return icon;
}

function getSocialName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function Parallax({ data }) {
  const classes = useStyles();
  const { description, social } = data;

  return (
    <Box
      className={classes.root}
      display="block"
      pt={14}
      pb={4}
      borderTop={10}
      borderColor="primary.main"
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Container maxWidth="sm" className={classes.text}>
            <Typography variant="h3" gutterBottom>
              <span className="wave" role="img" aria-label="waving-hand-emoji">
                👋
              </span>{" "}
              Hi there!
            </Typography>
            <Typography variant="h4" color="textSecondary">
              {description}
            </Typography>
          </Container>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} sm={5}>
            <Image />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <Box m={2} display="flex" justifyContent="center">
            {social.map(ele => (
              <Box display="flex" alignItems="center" key={ele.name} mx={1}>
                {renderIcon(ele.name)}
                <Box ml={1}>
                  <Link to={ele.url} target="_blank">
                    {getSocialName(ele.name)}
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
        <Hidden smUp>
          <Grid item xs={12}>
            <Box m={2} display="flex" justifyContent="center">
              <Image />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Box>
  );
}

export default Parallax;

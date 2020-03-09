import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Container, Hidden } from "@material-ui/core";
import Link from "./Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Image from "../assets/Avatar.inline.svg";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundImage: `url(${Image})`,
    backgroundColor: theme.palette.secondary.light,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "75% 75%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
    case "website":
      icon = <LanguageIcon color="primary" fontSize="small" />;
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
    <Box className={classes.root} display="block" pt={8} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Container maxWidth="sm">
            <Typography variant="h3" gutterBottom>
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

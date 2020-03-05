import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../gatsby-plugin-theme-ui/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Typography,
  Link,
  Container,
  Box,
  CssBaseline,
} from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
  },
}));

const components = {
  p: props => <Typography paragraph {...props} />,
  h1: props => <Typography variant="h1" {...props} />,
  h2: props => <Typography variant="h2" {...props} />,
  h3: props => <Typography variant="h3" {...props} />,
  h4: props => <Typography variant="h4" {...props} />,
  h5: props => <Typography variant="h5" {...props} />,
  h6: props => <Typography variant="h6" {...props} />,
  a: Link,
  pre: props => <div {...props} />,
};

const Layout = ({ children }) => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <CssBaseline />
        <Box
          display="flex"
          flexDirection="column"
          style={{ minHeight: "100vh" }}
        >
          <Navbar>{data.site.siteMetadata.title}</Navbar>
          <Container maxWidth="sm" className={classes.container}>
            {children}
          </Container>
          <Footer>{data.site.siteMetadata.author}</Footer>
        </Box>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;

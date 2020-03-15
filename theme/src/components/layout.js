import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import Footer from './Footer';
import Parallax from './Parallax';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Typography, Link, Box, CssBaseline, Toolbar } from '@material-ui/core';
import ScrollTop from './ScrollTop';
import Chips from './Chips';

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

const Layout = props => {
  const { children } = props;
  const data = useSiteMetadata();
  const { author } = data;

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <CssBaseline />
        <Box
          display="flex"
          flexDirection="column"
          style={{ minHeight: '100vh' }}
        >
          <Toolbar id="back-to-top-anchor" style={{ minHeight: 0 }} />
          <Parallax data={data} />
          <Chips chips={['hello', 'kitty', 'is', 'a', 'cat']} />
          {children}
          <Footer author={author} />
        </Box>
        <ScrollTop {...props} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default Layout;

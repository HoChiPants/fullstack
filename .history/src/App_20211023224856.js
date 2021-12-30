import React, { Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";

import AppHeader from "./components/AppHeader";
import Home from "./pages/Home";

const styles = (theme) => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
      <Route exact path="/" component={Home} />
      <Route path="/login/callback" component={LoginCallback} />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);

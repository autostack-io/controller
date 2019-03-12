import React from "react";

import "typeface-roboto";

import CssBaseline from "@material-ui/core/CssBaseline";

import {
	MuiThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";

import pink from "@material-ui/core/colors/pink";

import Loading from "./Loading";

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
      main: '#1e88e5',
    },
		secondary: pink,
	},
	typography: {
		useNextVariants: true,
	},
});

export default (props) => {
  return (
    <React.Fragment>
				<CssBaseline />
				<MuiThemeProvider theme={theme}>
					<div className="App">
            {props.loading ? (
              <Loading />
            ) : (
              <div>{props.children}</div>
            )}
					</div>
				</MuiThemeProvider>
			</React.Fragment>
  );
}
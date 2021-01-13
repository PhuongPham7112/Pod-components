import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
          MuiButton: {
          // Name of the rule
              text: {
            // Some CSS
                  fontSize: 'calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)))',
          },
        },
      },
    });
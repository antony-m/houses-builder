import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

const TopBar = () => (
  <AppBar position="relative" color="default">
    <ToolBar position="static">
      <Typography variant="h5">City Builder</Typography>
    </ToolBar>
  </AppBar>
);

export default TopBar;
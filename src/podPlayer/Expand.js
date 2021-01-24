import React from 'react';
import Menu from '@material-ui/core/Menu';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Typography } from "@material-ui/core";

export default function Expand() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [votesPod, setVotesPod] = React.useState(0);
  const [votesPlaylist, setVotesPlaylist] = React.useState(0);
  const [userVote, setUserVote] = React.useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickUpVotePod = () => {
    if (userVote === 0) {
      setVotesPod(votesPod + 1)
      setUserVote(1)
    } else if (userVote === 1) {
      setVotesPod(votesPod - 1)
      setUserVote(0)
    } else if (userVote === -1) {
      setVotesPod(votesPod + 1)
      setUserVote(0)
    }
  };

  const handleClickDownVotePod = () => {
    if (userVote === 0) {
      setVotesPod(votesPod - 1)
      setUserVote(-1)
    } else if (userVote === -1) {
      setVotesPod(votesPod + 1)
      setUserVote(0)
    } else if (userVote === 1) {
      setVotesPod(votesPod - 1)
      setUserVote(0)
    }
  };

  const handleClickUpVotePlaylist = () => {
    if (userVote === 0) {
      setVotesPlaylist(votesPlaylist + 1)
      setUserVote(1)
    } else if (userVote === 1) {
      setVotesPlaylist(votesPlaylist - 1)
      setUserVote(0)
    } else if (userVote === -1) {
      setVotesPlaylist(votesPlaylist + 1)
      setUserVote(0)
    }
  };

  const handleClickDownVotePlaylist = () => {
    if (userVote === 0) {
      setVotesPlaylist(votesPlaylist - 1)
      setUserVote(-1)
    } else if (userVote === -1) {
      setVotesPlaylist(votesPlaylist + 1)
      setUserVote(0)
    } else if (userVote === 1) {
      setVotesPlaylist(votesPlaylist - 1)
      setUserVote(0)
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <UnfoldMoreIcon/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>

        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8}}>
          <Typography variant="subtitle1" style={{margin: 3}}>
            Pod
          </Typography>
          <div style={{display: "flex", justifyContent: "center", borderRadius: 46, border: "solid thin gray", width: 92, margin: 3}}>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickUpVotePod} style={{padding: "2px"}}>
              <ArrowUpwardIcon style={{fontSize: "small"}}/>
            </IconButton>

            <Typography variant="subtitle1" style={{margin: "0px 5px"}}> 
              {votesPod} 
            </Typography>

            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickDownVotePod} style={{padding: "2px"}}>
              <ArrowDownwardIcon style={{fontSize: "small"}}/>
            </IconButton>
          </div>
        </div>

        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 8}}>
          <Typography variant="subtitle1" style={{margin: 3}}>
            Playlist
          </Typography>
          <div style={{display: "flex", justifyContent: "center", borderRadius: 46, border: "solid thin gray", width: 92, margin: 3}}>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickUpVotePlaylist} style={{padding: "2px"}}>
              <ArrowUpwardIcon style={{fontSize: "small"}}/>
            </IconButton>
            <Typography variant="subtitle1" style={{margin: "0px 5px"}}> 
              {votesPlaylist} 
            </Typography>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickDownVotePlaylist} style={{padding: "2px"}}>
              <ArrowDownwardIcon style={{fontSize: "small"}}/>
            </IconButton>
          </div>
        </div>
        
      </Menu>
    </div>
  );
}
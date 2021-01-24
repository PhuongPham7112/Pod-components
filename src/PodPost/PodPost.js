import React, { useState, useRef } from "react";
import 'fontsource-rubik';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, IconButton, Tooltip } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import MicIcon from '@material-ui/icons/Mic';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ShareIcon from '@material-ui/icons/Share';

import audios from '../audios.js';
import MoreOptions from './MoreOptions.js';
import Expand from './Expand.js';
import TimeSlider from "react-input-slider";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    
    padding: theme.spacing(1),

    // big screen layout
    // the big, pink background rectangle that sticks to the bottom of the screen
    container: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        display: 'inline-block',
        backgroundColor: '#fff1f0',
        margin: '0 auto',
        margintop: '5vh',
    },
    // the content container inside the rectangle
    contentBigScreen: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gridTemplateRows: 'repeat(3, auto)',
        gridGap: '2px',
        justifyContent: 'start',
    },
    // the container that holds the left side of the bar aka the player which has skip, play/pause, volume, expand more buttons + slider
    player: {
        display: 'flex',
        gridRow: '2/3',
        gridColumn: '1/2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: 'solid thin gray',
        height: '100%'
    },
    // the slider for big screen
    sliderBigScreen: {
        display: 'flex',
        width: '90%',
        alignItem: 'center',
        justifyContent: 'center'
    },
    // the left side buttons
    playPauseButton: {
        color: theme.palette.primary.main,
        fontSize: '35px',
        margin: 3
    },
    skipButton: {
        color: theme.palette.primary.main,
        fontSize: '35px',
        margin: 3
    },
    volumne: {
        color: 'black'
    },
    expand: {
        fontSize: '40px',
        color: 'black'
    },
    
    // now for the right side of the bar which holds pod title, pod author, mic, bookmark, share, follow, and more buttons
    // a container called podInfo which holds pod title and pod author
    podInfo: {
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '2/3',
        gridRow: '2/3',
        justifySelf: 'start',
        alignSelf: 'center',
        paddingLeft: '20px',
        whiteSpace: 'nowrap',
        wordBreak: 'normal',
        margin: 5
    },
    // pod title and pod author
    title: {
        color: 'black',
        fontWeight: 500,
    },
    userResponse: {
        color: 'black',
        fontWeight: 300,
    },
    // a container called other buttons that holds mic, bookmark, share, follow, and more buttons
    otherButtons: {
        display: 'flex',
        flexDirection: 'row',
        gridRow: '2/3',
        gridColumn: '3/4',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    // mic, bookmark, share, follow, and more buttons
    mic: {
        color: 'black',
        
    },
    bookmark: {
        color: 'black',
    },
    share: {
        color: 'black',
    },

    // slider for the medium screen
    sliderMediumScreen: {
        display: 'none'
    },

    // small screen layout with small screen components
    contentSmallScreen: {
        display: 'none'
    },
    sliderSmallScreen: {
        display: 'none'
    },
    podInfoSmallScreen: {
        display: 'none'
    },

    // start hiding components when the screensize goes below certain breakpoints
    [theme.breakpoints.down('960')]: {
        share: {
            display: 'none'
        },
        playPauseButton: {
            fontSize: '30px'
        },
        skipButton: {
            fontSize: '30px'
        },
        sliderBigScreen: {
            display: 'none'
        },
        // show the medium slider
        sliderMediumScreen: {
            display: 'flex',
            width: '100%',
            marginTop: 0,
            marginBottom: 0,
            alignItem: 'start'
        }
    },
    [theme.breakpoints.down('760')]: {
        bookmark: {
            display: 'none'
        },
        mic: {
            display: 'none'
        },
        follow: {
            display: 'none'
        },
        playPauseButton: {
            fontSize: '25px'
        },
        skipButton: {
            fontSize: '25px'
        },
    },
    [theme.breakpoints.down('600')]: {
        // hide big screen content
        contentBigScreen: {
            display: 'none'
        },
        sliderMediumScreen: {
            display: 'none'
        },
        expand: {
            display: 'none'
        },
        // show small screen content
        contentSmallScreen: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'repeat(3, auto)',
            gridGap: '2px',
            justifyContent: 'start',
            marginBottom: 0
        },
        sliderSmallScreen: {
            display: 'flex',
            width: '100%',
            marginTop: 0,
            marginBottom: 0,
            alignItem: 'start',
            gridRow: '1/2'
        },
        containerSmallScreen: {
            display: 'flex',
            flexDirection: 'row',
            gridRow: '2/3',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        playButtonSmallScreen: {
            margin: '3px 10px 0px',
            padding: 0,
        },
        playPauseButton: {
            fontSize: '25px'
        },
        skipButtonSmallScreen: {
            margin: '3px 10px 0px',
            padding: 0,
            fontSize: '5px',
            color: '#ff8383',
        },
        podInfoSmall: {
            margin: '5px 0px 5px'
        }
    }
}));

export default function PodPost() {
    const classes = useStyles();
    const theme = useTheme();
    const audioRef = useRef(null);
    // audioIndex is used to track the order of the songs in the laylist
    const [audioIndex, setAudioIndex] = useState(0);
    // keep track of the current play time in the song
    const [currentTime, setCurrentTime] = useState(0);
    // keep track of the duration of the audio file
    const [duration, setDuration] = useState(0);
    // keep strack of the play state
    const [isPlay, setPlay] = useState(false);

    // set the duration of the song and play the song when the isPlay = true
    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) {
            audioRef.current.play();
        };
    }
    
    // handle the operation of play/pause button
    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!isPlay);
    };

    // handle the dragging, clicking on the slider so that the point in time of the song changes according to the mouse click
    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }
    };

    // this will handle the list options appearing in the more button
    var myOptions = [];

    // different screen sizes
    const mediaQueries = [window.matchMedia('(max-width: 760px)'), window.matchMedia('(max-width: 960px) and (min-width: 761px)'), window.matchMedia('(min-width: 961px)')]
     
    function mediaqueryresponse(mediaQuery){
        // if screen size is below 760px, here are the options that will appear in more button
        if (mediaQueries[0].matches){
            myOptions.length = 0
            myOptions.push("mic", "bookmark", "share", "follow playlist", "report")
        }
        // if screen size is between 960 and 761px, here are the options that will appear in more button
        else if (mediaQueries[1].matches){ 
            myOptions.length = 0
            myOptions.push("share", "follow playlist", "report")
            
        }
        // if screen size is above 961px, here are the options that will appear in more button
        else if (mediaQueries[2].matches){ 
            myOptions.length = 0
            myOptions.push("follow playlist", "report")
        }
    }
    
    // add the listener function to the media queries so the program will be on the look out for screen changes
    for (var i=0; i<mediaQueries.length; i++){
        mediaqueryresponse(mediaQueries[i]) // call listener function explicitly at run time
        mediaQueries[i].addListener(mediaqueryresponse) // attach listener function to listen in on state changes
    }

    return (
        <div className={classes.container}> 
            {/* small screen layout that will only appear when screen size is below 550px */}
            <div className={classes.contentSmallScreen}>
                <div className={classes.sliderSmallScreen}>
                    <TimeSlider
                        axis="x"
                        xmax={duration}
                        x={currentTime}
                        onChange={handleTimeSliderChange}
                        styles={{
                            track: {
                                backgroundColor: "white",
                                width: "100%",
                                height: "3px",
                                
                            },
                            active: {
                                backgroundColor: theme.palette.primary.main,
                            },
                            thumb: {
                                backgroundColor: theme.palette.primary.main,
                            }
                        }}/>
                </div>
                <div className={classes.containerSmallScreen}>
                    <div className={classes.playButtonSmallScreen} onClick={handlePausePlayClick}>
                            {isPlay ? <PauseCircleFilledIcon className={classes.playPauseButton}/> : <PlayCircleFilledIcon className={classes.playPauseButton}/>}
                    </div>
                    <div className={classes.podInfoSmall}>
                        <Typography variant="body1"> {audios[audioIndex].title + " - " + audios[audioIndex].playlist} </Typography>
                        <Typography variant="body4"> {audios[audioIndex].author}'s response </Typography>
                    </div>
                    <IconButton className={classes.skipButtonSmallScreen}>
                        <SkipNextIcon onClick={() => {
                            setCurrentTime(0);
                            if (audioIndex < Object.keys(audios).length - 1) {
                                setAudioIndex(audioIndex + 1)
                            }}}/>
                    </IconButton>
                </div>
            </div>
            
            {/* a medium screen slider that will only appear when screen size is below 961px */}
            <div className={classes.sliderMediumScreen}>
                    <TimeSlider
                    axis="x"
                            xmax={duration}
                            x={currentTime}
                            onChange={handleTimeSliderChange}
                        styles={{
                            track: {
                                backgroundColor: "white",
                                width: "100%",
                                height: "3px",
                                
                            },
                            active: {
                                backgroundColor: theme.palette.primary.main,
                            },
                            thumb: {
                                backgroundColor: theme.palette.primary.main,
                            }
                        }}/>
            </div>

            {/* big screen layout from 961px upward */}
            <div className={classes.contentBigScreen}>
                {/* left side of the bar */}
                <div className={classes.player}>
                    <IconButton size="small">
                        <SkipPreviousIcon className={classes.skipButton} onClick={() => {
                        setCurrentTime(0);
                        if (audioIndex >= 1) {
                            setAudioIndex(audioIndex - 1)
                        }}}/>
                    </IconButton>

                    <div onClick={handlePausePlayClick}>
                        {isPlay ?
                        <IconButton size="small">
                        <PauseCircleFilledIcon className={classes.playPauseButton}/>
                        </IconButton> 
                         : 
                        <IconButton size="small">
                        <PlayCircleFilledIcon className={classes.playPauseButton}/>
                        </IconButton>} 
                    </div>

                    <IconButton size="small">
                        <SkipNextIcon className={classes.skipButton} onClick={() => {
                            setCurrentTime(0);
                            if (audioIndex < Object.keys(audios).length - 1) {
                                setAudioIndex(audioIndex + 1)
                            }}}/>
                    </IconButton>

                    <Typography variant="subtitle2" color="primary" style={{margin: 10}}>
                        {Math.floor(currentTime / 60)}:{Math.floor(currentTime - Math.floor(currentTime / 60)*60)}/{Math.floor(duration / 60)}:{Math.floor(duration - Math.floor(duration / 60)*60)}
                    </Typography>
                    
                    <div className={classes.sliderBigScreen}>
                        <TimeSlider
                            axis="x"
                            xmax={duration}
                            x={currentTime}
                            onChange={handleTimeSliderChange}
                            styles={{
                                track: {
                                    backgroundColor: "white",
                                    width: "90%",
                                    height: "3px",
                                    
                                },
                                active: {
                                    backgroundColor: theme.palette.primary.main,
                                },
                                thumb: {
                                    backgroundColor: theme.palette.primary.main,
                                }
                            }}
                        />
                    </div>
                    
                    <IconButton className={classes.volumne}>
                        <VolumeUpIcon className={classes.volume}/>
                    </IconButton>

                    <Expand className={classes.expand}/>

                    <audio
                        ref={audioRef}
                        src={audios[audioIndex].src}
                        onLoadedData={handleLoadedData}
                        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                        onEnded={() => setPlay(false)}
                    />
                </div>

                {/* right side of the bar */}
                <div className={classes.podInfo}>
                    <Tooltip title={audios[audioIndex].title + " - " + audios[audioIndex].playlist} placement="top-end">
                        <Typography variant="body1" className={classes.title}> {audios[audioIndex].title + " - " + audios[audioIndex].playlist.replace(/^(.{11}[^\s]*).*/, "$1") + "..."} </Typography>
                    </Tooltip>
                    <Typography variant="body4" className={classes.userResponse}> {audios[audioIndex].author}'s response </Typography>
                </div>
                
                <div className={classes.otherButtons}> 
                    <IconButton className={classes.mic} >
                        <MicIcon />
                    </IconButton>

                    <IconButton  className={classes.bookmark} >
                        <BookmarkBorderIcon/>
                    </IconButton>

                    <IconButton className={classes.share} >
                        <ShareIcon />
                    </IconButton>
                    
                    <MoreOptions optionsList={myOptions} className={classes.more}/>

                </div>
            </div>
        </div>
    )
}
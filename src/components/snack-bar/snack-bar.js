import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';
import PreLoader from "../pre-loader/pre-loader.component";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomSnackbar({state, message}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const Success = () => (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            <Alert onClose={handleClose} severity="success">
                {message}
            </Alert>
        </Snackbar>
    );

    const Progress = () => (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                  color="white"
        >
            <Alert onClose={handleClose} severity="low">
                <PreLoader/>
            </Alert>
        </Snackbar>
    );

    const Error = () => (
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
                  anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            <Alert onClose={handleClose} severity="error">
                {message}
            </Alert>
        </Snackbar>
    );

    return (
        <div className={classes.root}>
            {
                state === "progress" && <Progress/>
            }
            {
                state === "success" && <Success/>
            }
            {
                state === "error" && <Error/>
            }
        </div>
    );
}

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/styles";
import React, { useState } from 'react';


const useStyles = makeStyles(theme => ({
    formWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        marginBottom: '15px'
    },

}));

export const SignupPage = ({ setIsLoggedInState }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");

    const classes = useStyles();
    return (
        <div className={classes.formWrapper}>

            <h2>Sign up</h2>

            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="First name"
                    className={classes.textField}
                    value={first_name}
                    onChange={(e) => { setFirstName(e.target.value) }}
                    margin="normal"
                />

                <TextField
                    id="standard-name"
                    label="Last name"
                    className={classes.textField}
                    value={last_name}
                    onChange={(e) => { setLastName(e.target.value) }}
                    margin="normal"
                />

                <TextField
                    id="standard-name"
                    label="Email"
                    className={classes.textField}
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    margin="normal"
                />

                <TextField
                    type="password"
                    id="standard-uncontrolled"
                    label="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    className={classes.textField}
                    margin="normal"
                />

                <TextField
                    type="password"
                    id="standard-uncontrolled"
                    label="Confirm Password"
                    value={password_confirm}
                    onChange={(e) => { setPasswordConfirm(e.target.value) }}
                    className={classes.textField}
                    margin="normal"
                />


            </form>
            <Button variant="contained"
                className={classes.button}
                onClick={() => {
                    localStorage.setItem("isLoggedIn", "true");
                    window.location.href = window.location.origin + "/dining?userId=" + email;
                }}>Sign up
            </Button>
        </div>
    );
}
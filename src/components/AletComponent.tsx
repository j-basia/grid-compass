import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { validateAndFormatInput } from '../helper/helper'
import { AppSettings } from '../store/config';
import '../css/InputComponent.css';
import '../css/common.css';

export interface AlertComponentProps {
    alertMessage: string;
    severity: any;
    showAlertComponent: boolean;
    onClose: any
}

const AlertComponent = ({ 
    alertMessage,
    severity = 'error',
    showAlertComponent = false,
    onClose
 }: AlertComponentProps) => {
    const [showAlert, setShowAlert] = useState(showAlertComponent);

    useEffect(() => {
        setShowAlert(showAlertComponent);
    }, [showAlertComponent])

    const handleClose = () => {
        setShowAlert(false);
        onClose(false);
    };

    return (
        <>
            <Snackbar
                open={showAlert}
                onClose={handleClose}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <Alert
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    )
}

export default AlertComponent
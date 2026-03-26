import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AlertComponent from './AletComponent';
import { validateAndFormatInput } from '../helper/helper'
import { AppSettings } from '../store/config';
import '../css/InputComponent.css';
import '../css/common.css';

export interface InputComponentProps {
    setDirection: (value: string) => void;
    gridSize?: number;
    validator?: (input: string, size: number) => { errorMessage: string; formattedInput: string };
    initialValue?: string;
}

const InputComponent = ({ 
    setDirection, 
    gridSize = AppSettings.GridSize,
    validator = validateAndFormatInput,
    initialValue = ''
 }: InputComponentProps) => {
    const [textValue, setTextValue] = useState(initialValue);
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const onClickReveal = () => {
        const { errorMessage, formattedInput } = validator(textValue, gridSize);

        if (errorMessage == '') {
            setDirection(formattedInput);
        }
        else {
            setErrorMessage(errorMessage);
            setShowErrorMessage(true);
        }
    };

    const onClose = () => {
        setShowErrorMessage(false);
    }

    return (
        <>
            <Grid container>
                <Grid size={10} className="pl-1">
                    <TextField
                        fullWidth
                        id="user-input"
                        label="Input Coordinates and Direction"
                        variant="outlined"
                        size='small'
                        value={textValue}
                        helperText='Valid input format: "x,y DIRECTION" where "x" and "y" are numeric and "DIRECTION" is either NORTH, EAST, SOUTH, or WEST.'
                        onChange={(e) => setTextValue(e.target.value)}
                    />
                </Grid>
                <Grid size={2}>
                    <Button
                        id="reveal-button"
                        variant="contained"
                        onClick={onClickReveal}
                    >
                        Reveal
                    </Button>
                </Grid>
            </Grid>
            <AlertComponent
                showAlertComponent={showErrorMessage}
                severity='error'
                alertMessage={errorMessage}
                onClose={onClose}
                >
            </AlertComponent>
        </>
    )
}

export default InputComponent
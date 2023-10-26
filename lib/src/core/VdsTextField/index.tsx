import { Box } from '@mui/material';
import MuiInput, { InputProps as MuiInputProps } from '@mui/material/Input';
import * as React from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';

export type InputProps = {
    label?: string,
    helperText?: string,
    type?: string,
    errorText?: string,
    collapse?: boolean,
} & MuiInputProps;

export const VdsTextField: React.VFC<InputProps> = (props) => {

    const {
        label,
        errorText,
        helperText,
        collapse,
        error,
        disabled,
        readOnly,
        ...inputProps
    } = props;

    return (
        <Box sx={{
            ...inputProps.sx,
            'display': 'flex',
            'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            'flexDirection': 'column',
            'width': 'initial',
            'input': { padding: '0 !important' },
            'minHeight': collapse ? 'unset' : '80px'
        }}>
            {(label || helperText) && (
                <Box sx={{
                    'marginBottom': '6px',
                    'display': 'flex',
                    'flexDirection': 'column'}}>
                    {label && (
                        <span style={{
                            'fontSize': "14px",
                            'color': readOnly ? "black" : disabled ? "#9DA6AD" : "#152935",
                            'letterSpacing': "0",
                            'lineHeight': "14px",
                            'fontFamily': "Roboto !important",
                            'fontWeight': 700,
                            'textAlign': "left",
                            'marginBottom': '0px',
                            'marginLeft': 2}}>
                            {label}
                        </span>
                    )}
                </Box>
            )}
            <MuiInput
                {...inputProps}
                error={error}
                sx={{
                    'border': disabled ? '1px solid #C1C1C4' : readOnly ? '1px solid #C1C1C4' : error ? '1px solid #D82829' : '1px solid #C9D9E8',
                    'backgroundColor': (disabled || readOnly) ? '#FAFBFD' : '#F2F5F8',
                    'padding': '7.5px 14px!important',
                    'fontFamily': "Roboto !important",
                    'cursor': disabled ? 'not-allowed!important' : 'text!important',
                    '*': {
                        'cursor': disabled ? 'not-allowed!important' : 'text!important'
                    },
                    ':hover': {
                        'border': disabled ? '1px solid #0090D1' : readOnly ? '1px solid #C1C1C4' : error ? '1px solid #D82829' : '1px solid #0090D1!important'
                    },
                    '::placeholder': {
                        'fontSize': "14px!important",
                        'color': (disabled || readOnly) ? "#C1C1C4" : "#9DA6AD",
                        'lineHeight': "18px",
                        'fontFamily': "Roboto !important",
                        'fontWeight': 400,
                        'textAlign': "left"
                    },
                    '::before': {
                        'all': 'unset'
                    },
                    '::after': {
                        'all': 'unset'
                    },
                    '.MuiTouchRipple-root': { cursor: 'pointer!important' },
                    button: { cursor: 'pointer!important' },
                    svg: { cursor: 'pointer!important' },
                    ...inputProps.sx
                }}
            />
            {error && Boolean(errorText) && (
                <span style={{
                    'fontSize': "13px",
                    'color': "#D82829",
                    'lineHeight': "18px",
                    'fontWeight': 400,
                    'fontFamily': "Roboto !important",
                    'display': 'flex',
                    'alignItems': 'center',
                    'textAlign': "left"}}>
                    <AiFillMinusCircle size={13} style={{ marginLeft: 6, marginRight: 6 }} /> {errorText}
                </span>
            )}
            {helperText && (
                <span style={{
                    'fontSize': "12px",
                    'marginTop': '6px',
                    'color': disabled ? '#C1C1C4' : "#9DA6AD",
                    'lineHeight': "12px",
                    'fontFamily': "Roboto",
                    'fontWeight': 400,
                    'textAlign': "left"}}>
                    {helperText}
                </span>
            )}
        </Box>
    );
}

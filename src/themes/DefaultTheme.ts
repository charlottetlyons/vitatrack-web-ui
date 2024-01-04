import { ThemeOptions } from '@mui/material';

const defaultTheme: ThemeOptions = {
    palette: {
        primary: {
            main: '#6B5058',
            light: '#916D77',
            dark: '#523D43',
        },
        secondary: {
            main: '#D9D7CF',
            light: '#E5E3DB',
            dark: '#CCCAC3',
        },
        text: {
            primary: '#D9D7CF',
            secondary: '#382A2E',
        },
        background: {
            default: '#D9D7CF',
            paper: '#A1AC78',
        },
    },

    typography: {
        fontWeightRegular: 400,
        fontFamily: [
            'Inria Serif, Times New Roman, serif',
            'Livvic, Arial, sans-serif',
        ].join(','),
        h1: {
            fontFamily: 'Inria Serif',
            color: '#D9D7CF',
            fontSize: '102px',
        },
        h2: {
            fontFamily: 'Inria Serif',
            color: '#D9D7CF',
            fontSize: '72px',
        },
        subtitle1: {
            fontFamily: 'Inria Serif',
            color: '#D4E38F',
            fontSize: '30px',
        },
        body1: {
            fontFamily: 'Livvic',
            color: '#6B5058',
            fontSize: '16px',
        },
        body2: {
            fontFamily: 'Livvic',
            color: '#A6A295',
            fontSize: '30px',
        },
        button: {
            fontFamily: 'Livvic',
            color: '#D9D7CF',
            fontSize: '16px',
        },
    },
};

export default defaultTheme;

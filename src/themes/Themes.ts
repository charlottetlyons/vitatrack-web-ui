import { ThemeOptions } from '@mui/material';
import Background from '../../public/Background.png';

const baseTheme: object = {
    palette: {
        common: {
            white: '#E0E3D2',
            black: '#968f8b',
        },
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
            primary: '#98928E',
            secondary: '#382A2E',
        },
        background: {
            default: 'transparent',
            paper: '#A1AC78',
        },
    },
    shadows: ['none'],
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
            textAlign: 'center',
        },
        h2: {
            fontFamily: 'Inria Serif',
            color: '#D9D7CF',
            fontSize: '64px',
        },
        h3: {
            fontFamily: 'Inria Serif',
            color: '#D9D7CF',
            fontSize: '32px',
        },
        h4: {
            fontFamily: 'Inria Serif',
            color: '#E5DCB8',
            fontSize: '36px',
        },
        subtitle1: {
            fontFamily: 'Inria Serif',
            color: '#D4E38F',
            fontSize: '30px',
            textAlign: 'center',
        },
        subtitle2: {
            fontFamily: 'Livvic',
            color: '#A6A295',
            fontSize: '30px',
        },
        body1: {
            fontFamily: 'Livvic',
            color: '#6B5058',
            fontSize: '16px',
        },
        body2: {
            fontFamily: 'Livvic',
            fontWeight: 700,
            color: '#6B5058',
            fontSize: '16px',
        },
        button: {
            fontFamily: 'Livvic',
            color: '#D9D7CF',
            fontSize: '16px',
        },
    },
};

export const externalTheme: ThemeOptions = {
    components: {
        MuiCssBaseline: {
            styleOverrides: () => ({
                html: {
                    height: '100%',
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                },
            }),
        },
    },
    ...baseTheme,
};

export const internalTheme: ThemeOptions = {
    components: {
        MuiCssBaseline: {
            styleOverrides: () => ({
                html: {
                    height: '100%',
                    backgroundColor: '#D9D7CF',
                    backgroundImage: 'none',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                },
            }),
        },
    },
    ...baseTheme,
};

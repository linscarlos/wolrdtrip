import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        yellowtrip: {
            "100": "#FFBA08",
            "50": "rgba(255, 186, 8, 0.5)"
        },
        dark: {
            "htext": "#47585B",
            "black": "#000000",
            "info": "#999999",
            "info50": "rgba(153, 153, 153, 0.5)",
        },
        light: {
            "white": "#FFFFFF", // White
            "htext": "#F5F8FA", // HTEXT
            "info": "#DADADA", // INFO
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'light.htext',
                color: 'gray.50'
            }
        }
    }
})
import { SvgIconComponent } from "@mui/icons-material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton"
import { useState } from 'react';

interface Props {
    icon: SvgIconComponent
}

const theme = createTheme({
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    height: 'var(--large-round-button-height)',
                    width: 'var(--large-round-button-height)',
                    backgroundColor: 'var(--bg-color-1)',
                    '&:hover': {
                        backgroundColor: 'var(--highlight-color)'
                    },
                }
            },
        },
    }
})

export const RoundedButton = (props: Props) => {
    
    const [color, setColor] = useState('var(--highlight-color)')

    const onMouseEnter = () => {
        setColor('var(--bg-color-1)')
    }

    const onMouseLeave = () => {
        setColor('var(--highlight-color)')
    }
    
    return (
        <ThemeProvider theme={theme}>
            <IconButton
                size="large"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <props.icon style={{ color }}/>
            </IconButton>
        </ThemeProvider>
    )
}

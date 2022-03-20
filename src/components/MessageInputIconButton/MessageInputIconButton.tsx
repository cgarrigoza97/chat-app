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
                    "&:hover": {
                        backgroundColor: 'transparent',
                    },
                }
            },
        },
    }
})

export const MessageInputIconButton = (props: Props) => {
    
    const [color, setColor] = useState('var(--icon-color-1)')

    const onMouseEnter = () => {
        setColor('var(--highlight-color)')
    }

    const onMouseLeave = () => {
        setColor('var(--icon-color-1)')
    }
    
    return (
        <ThemeProvider theme={theme}>
            <IconButton
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <props.icon style={{ color }}/>
            </IconButton>
        </ThemeProvider>
    )
}

import { createTheme } from '@mui/material'

const theme = createTheme()

export const styles = {
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    smMargin: {
        margin: theme.spacing(1)
    },

    actionDiv: {
        textAlign: 'center',
    }
}
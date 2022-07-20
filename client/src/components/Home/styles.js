import { createTheme } from "@mui/system"


const theme = createTheme()

export const styles = {
    mainContainer: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
}
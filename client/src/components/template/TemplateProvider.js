import { CssBaseline } from "@material-ui/core"
import { createContext } from "react"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const TemplateContext = createContext(null)
export const TemplateProvider = ({children}) => {
    const theme = createTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
                }
            },
            MuiDialogContent: {
                root: {
                    '&:first-child': {
                        paddingTop: 'unset'
                    },
                    padding: 0
                }
            },
            MuiTableCell: {
                root: {
                    borderBottom: 'unset'
                }
            }
        }
    })

    return(
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    { children }
                </CssBaseline>
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}


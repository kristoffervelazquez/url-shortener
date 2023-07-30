import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./Theme";

const AppTheme = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;

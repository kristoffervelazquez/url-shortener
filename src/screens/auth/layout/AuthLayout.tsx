import { Grid, Typography } from "@mui/material";

interface Props extends React.PropsWithChildren {
  title: "Login" | "Register" | "Forgot Password";
}
const AuthLayout = ({ children, title }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "backgorund.default",
        padding: 4,
      }}
    >
      <Typography variant="h5">{import.meta.env.VITE_APP_TITLE}</Typography>
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "background.paper",
          padding: 3,
          borderRadius: 2,
          width: { md: 450 },
          mt: 10,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/*Login/Register */}
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;

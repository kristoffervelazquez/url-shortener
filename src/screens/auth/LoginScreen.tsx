import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import { useState } from "react";

const LoginScreen = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formValues.email === "" || formValues.password === "") {
      return;
    }

    console.log("submit");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} marginTop={2}>
            <TextField
              label="Email"
              type="email"
              placeholder="Enter your email"
              fullWidth
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
            <Grid item xs={12} marginTop={2}>
              <TextField
                label="Password"
                type="password"
                placeholder="*******"
                fullWidth
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({ ...formValues, password: e.target.value })
                }
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}></Grid>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid sx={{ mt: 2 }} container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>Not register yet?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create account!
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginScreen;

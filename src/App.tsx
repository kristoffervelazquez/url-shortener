import AppRouter from "./routers/AppRouter";
import AppTheme from "./theme/AppTheme";

const App = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};

export default App;

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { UsernameProvider } from "./context/UserProvider";
function App() {
  return (
    <div>
      <UsernameProvider>
        <RouterProvider router={router} />
      </UsernameProvider>
    </div>
  );
}

export default App;

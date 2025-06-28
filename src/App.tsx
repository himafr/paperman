import {
  RouterProvider,
  
} from "react-router";
import router from "./state/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes/routeConfig";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <RouterConfig />
      </Router>
    </>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { NewService } from "./routes/NewService/NewService";

export const router = createBrowserRouter([
 {path: '/', element: <Home />},
 {path: '/new-service', element: <NewService />}
])
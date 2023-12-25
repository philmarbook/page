import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AppLayout from "../layouts/AppLayout";

function Routes() {
  const element = useRoutes([
    {
        path: "/",
        element: <AppLayout title="Accueil">
            <Home/>
            </AppLayout>
    },
    {
        path: "/*",
        element: <AppLayout title="Erreur 404">
            <NotFound/>
            </AppLayout>
    }
  ]);

  return element;
}

export default Routes;
import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/Items/ListItems";
import CreateItem from "./pages/Items/CreateItems";
import ShowItem from "./pages/Items/ShowItem";
import UpdateItem from "./pages/Items/UpdateItem";
import ItemsLayout from "./pages/Items/Layout";


const router = createBrowserRouter ([{
    path:"/",
    element: <RootLayout   />,
    children: [
        {index: true, element: <Home />},
        {
            path: "items",
            element: <ItemsLayout/>,
            children: [
                {index: true, element: <ListItems/>},
                {path: "new", element: <CreateItem/>},
                {path: ":id", element: <ShowItem/>},
                {path: ":id/update", element: <UpdateItem/>},
            ]
        }
    ]
}])

export default router
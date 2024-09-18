import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../layout";
import Home from "../pages/home";
import Photo from "../pages/photo";
import SinglePost from "../components/posts/singlePost";
import Users from "../pages/Users";
import Tshirt from "../pages/tShirts";

const RouterPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index Component={Home}/>
            <Route path="/photo" Component={Photo}/>
            <Route path="/users" Component={Users}/>
            <Route path="/tShirt" Component={Tshirt}/>
            <Route path='/posts/:postId'  Component={SinglePost} />
        </Route>
    )
)
export default RouterPaths;
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from '../pages/Home';
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch(`http://localhost:3000/jobs`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/job/:id',
                element: <PrivateRoute>
                    <JobDetails />
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <PrivateRoute>
                    <AddJob />
                </PrivateRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute>
                    <MyPostedJobs />
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <UpdateJob />
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/job/${params.id}`)
            },
            {
                path: '/my-bids',
                element: <PrivateRoute>
                    <MyBids />
                </PrivateRoute>
            },
            {
                path: '/bid-request',
                element: <PrivateRoute>
                    <BidRequests />
                </PrivateRoute>
            }
        ]
    }
])

export default router;
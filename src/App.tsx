import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound';
import Auth from './screens/Auth';
import { privateRoutes, puclicRoutes } from './Routes/routes';
import { PrivateRoute } from './Components/PrivateRoutes/PrivateComponent';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {puclicRoutes.map((route, i) => {
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            element={<route.Element />}
                        />
                    );
                })}
                <Route path="/" element={<PrivateRoute />}>
                    {privateRoutes.map((route, i) => {
                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={<route.Element />}
                            />
                        );
                    })}
                </Route>
                <Route path="/login" element={<Auth />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { router } from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {router.map((route) => {
                        const Page = route.page;
                        const Layout = route.isShowHeader ? DefaultComponent : Fragment;
                        return (
                            <Route
                                path={route.path}
                                key={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;

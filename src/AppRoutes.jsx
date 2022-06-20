import {
    Routes,
    Route
} from 'react-router-dom';

import HomeContainer from 'containers/home/home-container.component';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/views" element={<HomeContainer />}>
            </Route>
        </Routes>
    );
}

export default AppRoutes;

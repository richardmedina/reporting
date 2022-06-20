import AppRoutes from './AppRoutes';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
   <div>
      <BrowserRouter>
        <AppRoutes />
     </BrowserRouter>
   </div>
  );
}

export default App;

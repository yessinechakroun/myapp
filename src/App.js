import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Counter from './Pages/Counter';
import Login from "./Pages/Login";
import NotFound from './Pages/NotFound';
import PrivateRoute from './Route/PrivateRoute/PrivateRoute';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<PrivateRoute>
          <Counter />
        </PrivateRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router >
  );
}

export default App;

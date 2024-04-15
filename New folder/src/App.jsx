import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Form from './pages/Auth/Form';
import Blue from './pages/Home/Blue';
import Details from './pages/Details/Details';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path='/home' element={<Blue />} />
                    <Route path='/' element={<Form />} />
                    <Route path='/products/:id' element={<Details />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;

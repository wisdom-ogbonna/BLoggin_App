
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import Layout from './Layout';
import IndexPages from './pages/indexPages';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';



function App() {
  return (
    <UserContextProvider>
    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index  element={<IndexPages />}/>
        <Route path='createPost'  element={<CreatePost />}/>
        <Route path="/login"  element={<LoginPage />}/>
        <Route path="/register"  element={<RegisterPage />}/>
        <Route path="/post/:id"  element={<PostPage/>}/>
      </Route>
    </Routes>
    </UserContextProvider>


  );
}

export default App;

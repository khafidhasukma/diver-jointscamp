import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Posts";
import DetailPost from "./pages/Posts/DetailPost";
import Contact from "./pages/Contact";
import Login from "./pages/Admin/Login";
import PostsAdmin from "./pages/Admin/Posts";
import CreatePost from "./pages/Admin/Posts/create";
import ShowPost from "./pages/Admin/Posts/show";
import EditPost from "./pages/Admin/Posts/edit";
import ContactAdmin from "./pages/Admin/Contact";
import ShowContact from "./pages/Admin/Contact/show";
import PrivateRouter from "./router/PrivateRouter";

const Layout = ({ children }) => {
    // Scroll to top on page transition
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path="/posts"
                    element={
                        <Layout>
                            <Post />
                        </Layout>
                    }
                />
                <Route
                    path="/posts/:id"
                    element={
                        <Layout>
                            <DetailPost />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRouter />}>
                    <Route path="/admin/posts" element={<PostsAdmin />} />
                    <Route path="/admin/posts/create" element={<CreatePost />} />
                    <Route path="/admin/posts/edit" element={<EditPost />} />
                    <Route path="/admin/posts/show/:id" element={<ShowPost />} />
                    <Route path="/admin/contact" element={<ContactAdmin />} />
                    <Route path="/admin/contact/show/:id" element={<ShowContact />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

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
import ContactAdmin from "./pages/Admin/Contact";

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
                <Route path="/admin/posts" element={<PostsAdmin />} />
                <Route path="/admin/posts/create" element={<CreatePost />} />
                <Route path="/admin/contact" element={<ContactAdmin />} />
            </Routes>
        </Router>
    );
};

export default App;

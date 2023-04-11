import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Post from "./pages/Posts";
import DetailPost from "./pages/Posts/DetailPost";
import Contact from "./pages/Contact";

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
            </Routes>
        </Router>
    );
};

export default App;

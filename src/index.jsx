import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import "./index.css";

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

import React from "react";

import {
    BrowserRouter as Router,
    Routes, // Switch(version 5.3) -> Routes(version 6)로 변경
    Route
} from "react-router-dom";
import {RecoilRoot} from 'recoil';

import Nav from "components/Navbar";
import Home from "routes/Home";
import Detail from "routes/Detail";

export default function App() {
    return (
        <RecoilRoot>
            <Router basename={process.env.PUBLIC_URL}>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/movie/:id" element={<Detail />}/>
                </Routes>
            </Router>
        </RecoilRoot>
    )
};
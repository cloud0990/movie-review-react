import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "routes/Home";
import Detail from "routes/Detail";

// 5.3       version 6
// Switch -> Routes로 바뀜: Route(requestURL) 찾은 후, 컴포넌트 렌더링
//   Routes로 감싸면 Route Component를 한 번에 하나씩 렌더링함
//   즉, 원한다면 Component를 한 번에 여러 개도 렌더링 가능
// Route: path="/url" element={<Component />}

//Link: 브라우저 새로고침 없이 다른 페이지로 이동시켜주는 컴포넌트
//   <link to="/url"></link>

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
            </Routes>
        </Router>
    )
};
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'App';

import "styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*
// 개발자 모드 -> 부모 자손 요소까지 검사...
// ref : https://velog.io/@hyes-y-tag/React-useEffect%EA%B0%80-%EB%91%90%EB%B2%88-%EC%8B%A4%ED%96%89%EB%90%9C%EB%8B%A4%EA%B3%A0
// https://velog.io/@hyes-y-tag/React-useEffect%EA%B0%80-%EB%91%90%EB%B2%88-%EC%8B%A4%ED%96%89%EB%90%9C%EB%8B%A4%EA%B3%A0
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

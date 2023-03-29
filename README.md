### React Set

```
npm i -g create-react-app

npx create-react-app 프로젝트명

cd 프로젝트명

npm start
```

<br>

### React Router Set

```
npm i react-router-dom
```

<br>

> 절대경로: https://create-react-app.dev/docs/using-the-public-folder/

```javascript
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Element from "Element";

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Element />}/>
            </Routes>
        </Router>
    )
};
```

```javascript
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div>
            <Link to={`url`}>go into url</Link>
        </div>
    );
}
```
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./Pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={undefined} />} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

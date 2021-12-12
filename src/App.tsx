import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Login } from "page/login";
import { Home } from "page/Home";
import { User } from "page/user";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
function App() {
  const location = useLocation();
  const history = useNavigate();
  const queryClient = new QueryClient();
  useEffect(() => {
    if (!localStorage.getItem("USER_TOKEN")) history("/login");
  }, [location.pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="User" element={<User />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

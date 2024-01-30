import { useState } from "react";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import InstagramPosts from "./scenes/instagramposts";
import YoutubePosts from "./scenes/youtubeposts";
import Login from "./scenes/login";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./scenes/calendar/calendar";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout tasks (e.g., clear authentication tokens, reset user state)
    // For simplicity, we are just resetting the isLoggedIn state here
    setLoggedIn(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            {isLoggedIn && <Sidebar isSidebar={isSidebar} onLogout={handleLogout} />}
            <main className="content">
              {isLoggedIn && <Topbar setIsSidebar={setIsSidebar} />}
              <Routes>
                <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
                <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/InstagramPosts" element={isLoggedIn ? <InstagramPosts /> : <Navigate to="/login" />} />
                <Route path="/YoutubePosts" element={isLoggedIn ? <YoutubePosts /> : <Navigate to="/login" />} />
                <Route path="*" element={isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
              </Routes>
            </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

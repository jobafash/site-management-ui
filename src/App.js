import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Auth from "./scenes/auth";
import SignUp from "./scenes/signup";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const isAuth = true;

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            { isAuth ? <Sidebar isSidebar={isSidebar} /> : <Navigate to="/" />}
            <main className="content">
              {/* { isAuth ?  */}
              <Topbar setIsSidebar={ setIsSidebar } /> 
              {/* // : <Navigate to="/" /> } */}
              <Routes>
                <Route path="/" element={<Auth /> } />
                <Route path="/new" element={<SignUp /> } />
                <Route path="/dashboard" element={ isAuth ? <Dashboard /> : <Navigate to="/" /> } />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                {/* <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} /> */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                {/* <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
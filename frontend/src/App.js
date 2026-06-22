import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "sonner";

const RateCardRedirect = () => {
  useEffect(() => {
    window.location.replace("/COREVA_Rate_Card.pdf");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-primary">
      <p className="font-light tracking-widest uppercase">Loading Rate Card...</p>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ratecard" element={<RateCardRedirect />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;

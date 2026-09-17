import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { CvUpload } from "./pages/CvUpload";
import { Team } from "./pages/Team";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { JobPackagingSales } from "./pages/JobPackagingSales";
import { JobAerospaceManager } from "./pages/JobAerospaceManager";
import { ThankYou } from "./pages/ThankYou";

import "@fontsource/oswald/latin-400.css";
import "@fontsource/oswald/latin-500.css";
import "@fontsource/oswald/latin-600.css";
import "@fontsource/oswald/latin-700.css";
import "@fontsource/league-gothic/latin-400.css";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-500.css";
import "@fontsource/source-sans-3/latin-600.css";
import "@fontsource/source-sans-3/latin-700.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv-upload" element={<CvUpload />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/job-packaging-sales" element={<JobPackagingSales />} />
          <Route path="/job-aerospace-manager" element={<JobAerospaceManager />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

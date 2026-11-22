import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { CvUpload } from "./pages/CvUpload";
import { HireTalent } from "./pages/HireTalent";
import { Team } from "./pages/Team";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { JobLaborEmploymentAttorney } from "./pages/JobLaborEmploymentAttorney";
import { JobPackagingSales } from "./pages/JobPackagingSales";
import { Services } from "./pages/Services";
import { ThankYou } from "./pages/ThankYou";

import "@fontsource/rubik/latin-400.css";
import "@fontsource/rubik/latin-500.css";
import "@fontsource/rubik/latin-600.css";
import "@fontsource/rubik/latin-700.css";
import "@fontsource/roboto-slab/latin-700.css";
import "@fontsource/newsreader/latin-400.css";
import "@fontsource/newsreader/latin-500.css";
import "@fontsource/newsreader/latin-600.css";
import "@fontsource/newsreader/latin-400-italic.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hire-talent" element={<HireTalent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv-upload" element={<CvUpload />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/job-packaging-sales" element={<JobPackagingSales />} />
          <Route path="/job-labor-employment-attorney" element={<JobLaborEmploymentAttorney />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

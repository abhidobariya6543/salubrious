import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SiteLayout from "./components/layouts/SiteLayout";
import Blog from "./pages/Blog";
import Offerings from "./pages/Offerings";
import Connect from "./pages/Connect";
import Training from "./pages/offerings/Training";
import UnifiedHealthcarePlatform from "./pages/offerings/UnifiedHealthcarePlatform";
import StandardizingHealthcareData from "./pages/offerings/StandardizingHealthcareData";
import TechnologyInnovations from "./pages/offerings/TechnologyInnovations";
import Doctors from "./pages/Doctors";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Index />} />
            <Route path="blog" element={<Blog />} />
            <Route path="offerings" element={<Offerings />} />
            <Route path="offerings/training" element={<Training />} />
            <Route path="offerings/unified-healthcare-platform" element={<UnifiedHealthcarePlatform />} />
            <Route path="offerings/standardizing-healthcare-data" element={<StandardizingHealthcareData />} />
            <Route path="offerings/technology-innovations" element={<TechnologyInnovations />} />
            <Route path="connect" element={<Connect />} />
            <Route path="doctors" element={<Doctors />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

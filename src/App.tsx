import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Software from "./pages/Software";
import SoftwareCRM from "./pages/software/SoftwareCRM";
import SoftwareAccounting from "./pages/software/SoftwareAccounting";
import SoftwareInventory from "./pages/software/SoftwareInventory";
import SoftwareTasks from "./pages/software/SoftwareTasks";
import Tools from "./pages/Tools";
import Work from "./pages/Work";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Book from "./pages/Book";
import Process from "./pages/Process";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/software" element={<Software />} />
          <Route path="/software/crm" element={<SoftwareCRM />} />
          <Route path="/software/accounting" element={<SoftwareAccounting />} />
          <Route path="/software/inventory" element={<SoftwareInventory />} />
          <Route path="/software/tasks" element={<SoftwareTasks />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/work" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/process" element={<Process />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

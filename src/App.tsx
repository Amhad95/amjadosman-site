import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Software from "./pages/Software";
import SoftwareCRM from "./pages/software/SoftwareCRM";
import SoftwareAccounting from "./pages/software/SoftwareAccounting";
import SoftwareInventory from "./pages/software/SoftwareInventory";
import SoftwareTasks from "./pages/software/SoftwareTasks";
import ServicesBrand from "./pages/services/ServicesBrand";
import ServicesOps from "./pages/services/ServicesOps";
import ServicesAgents from "./pages/services/ServicesAgents";
import Tools from "./pages/Tools";
import Work from "./pages/Work";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Book from "./pages/Book";
import Process from "./pages/Process";
import Resources from "./pages/Resources";
import ArticleDetail from "./pages/ArticleDetail";
import WorkDetail from "./pages/WorkDetail";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import PaymentComingSoon from "./pages/PaymentComingSoon";
// Tool pages
import SopBuilder from "./pages/tools/SopBuilder";
import PageCritique from "./pages/tools/PageCritique";
import BrandAudit from "./pages/tools/BrandAudit";
import ProcessMapper from "./pages/tools/ProcessMapper";
import DashboardBuilder from "./pages/tools/DashboardBuilder";
import KpiAudit from "./pages/tools/KpiAudit";

const queryClient = new QueryClient();

export const AppRoutes = () => (
  <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/brand" element={<ServicesBrand />} />
          <Route path="/services/ops" element={<ServicesOps />} />
          <Route path="/services/agents" element={<ServicesAgents />} />
          <Route path="/software" element={<Software />} />
          <Route path="/software/crm" element={<SoftwareCRM />} />
          <Route path="/software/accounting" element={<SoftwareAccounting />} />
          <Route path="/software/inventory" element={<SoftwareInventory />} />
          <Route path="/software/tasks" element={<SoftwareTasks />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/sop-builder" element={<SopBuilder />} />
          <Route path="/tools/page-critique" element={<PageCritique />} />
          <Route path="/tools/brand-audit" element={<BrandAudit />} />
          <Route path="/tools/process-mapper" element={<ProcessMapper />} />
          <Route path="/tools/dashboard-builder" element={<DashboardBuilder />} />
          <Route path="/tools/kpi-audit" element={<KpiAudit />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
          <Route path="/payment/coming-soon" element={<PaymentComingSoon />} />
          <Route path="/process" element={<Process />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
  </Routes>
);

interface AppProps { ssrPath?: string }

const App = ({ ssrPath }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {ssrPath ? <MemoryRouter initialEntries={[ssrPath]}><AppRoutes /></MemoryRouter> : <BrowserRouter><AppRoutes /></BrowserRouter>}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

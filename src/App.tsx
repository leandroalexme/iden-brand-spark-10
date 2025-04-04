
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BriefingForm from "./pages/BriefingForm";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DesignDirections from "./pages/DesignDirections";
import DesignCustomization from "./pages/DesignCustomization";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/briefing" element={<BriefingForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/design-directions" element={<DesignDirections />} />
          <Route path="/customization" element={<DesignCustomization />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

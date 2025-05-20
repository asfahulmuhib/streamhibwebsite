import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PaymentSuccessfull from "./pages/PaymentSuccessfull";
import Terms from "./pages/Terms"; // Impor halaman Terms
import Privacy from "./pages/Privacy"; // Impor halaman Privacy
import Cookies from "./pages/Cookies"; // Impor halaman Cookies
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/paymentsuccessfull" element={<PaymentSuccessfull />} />
            <Route path="/terms" element={<Terms />} /> {/* Route untuk Terms */}
            <Route path="/privacy" element={<Privacy />} /> {/* Route untuk Privacy */}
            <Route path="/cookies" element={<Cookies />} /> {/* Route untuk Cookies */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

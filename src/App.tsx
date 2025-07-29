import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Tours from './pages/Tours';
import TourInquiryForm from './pages/tour-inquiry';
import {CarRentalPage} from './pages/car-rental';
import NotFound from './pages/NotFound';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tour-inquiry" element={<TourInquiryForm />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/car-rental" element={<CarRentalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";  // ✅ Fixed missing import
import Index from "./pages/Index";
import Journal from "./pages/Journal";
import Therapy from "./pages/Therapy";
import Helpline from "./pages/Helpline";
import OnlineCounseling from "./pages/OnlineCounseling";
import SupportGroups from "./pages/SupportGroups";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import SelfCare from "./pages/SelfCare";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import MindGames from "./pages/MindGames";

// Feature Pages
import EmotionJournalPage from "./pages/EmotionJournal";
import EmotionalSupportPage from "./pages/EmotionalSupport";
import AITherapyPage from "./pages/AITherapy";
import MindfulBreaksPage from "./pages/MindfulBreaks";
import MoodNutritionPage from "./pages/MoodNutrition";
import NutritionRecipes from "./pages/NutritionRecipes";

const queryClient = new QueryClient();

const isAuthenticated = () => localStorage.getItem("auth") === "true";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated() ? element : <Navigate to="/auth" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* If no auth, force users to /auth first */}
          <Route path="/" element={isAuthenticated() ? <Navigate to="/home" /> : <Navigate to="/auth" />} />
          
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<PrivateRoute element={<Index />} />} />
          <Route path="/journal" element={<PrivateRoute element={<Journal />} />} />
          <Route path="/therapy" element={<PrivateRoute element={<Therapy />} />} />
          <Route path="/helpline" element={<PrivateRoute element={<Helpline />} />} />
          <Route path="/counseling" element={<PrivateRoute element={<OnlineCounseling />} />} />
          <Route path="/groups" element={<PrivateRoute element={<SupportGroups />} />} />
          <Route path="/resources" element={<PrivateRoute element={<Resources />} />} />
          <Route path="/community" element={<PrivateRoute element={<Community />} />} />
          <Route path="/self-care" element={<PrivateRoute element={<SelfCare />} />} />

          {/* Feature Pages */}
          <Route path="/emotion-journal" element={<PrivateRoute element={<EmotionJournalPage />} />} />
          <Route path="/emotional-support" element={<PrivateRoute element={<EmotionalSupportPage />} />} />
          <Route path="/ai-therapy" element={<PrivateRoute element={<AITherapyPage />} />} />
          <Route path="/mindful-breaks" element={<PrivateRoute element={<MindfulBreaksPage />} />} />
          <Route path="/mood-nutrition" element={<PrivateRoute element={<MoodNutritionPage />} />} />
          <Route path="/nutrition-recipes" element={<PrivateRoute element={<NutritionRecipes />} />} />
          <Route path="/games" element={<PrivateRoute element={<MindGames />} />} />
          
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
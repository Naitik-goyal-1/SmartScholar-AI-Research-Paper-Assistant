import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
import AuthPage from './pages/AuthPage';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import MyPapers from './pages/MyPapers';
import PaperDetails from './pages/PaperDetails';
import AIAssistant from './pages/AIAssistant';
import ConceptMap from './pages/ConceptMap';
import EquationExtractor from './pages/EquationExtractor';
import ResearchRoadmap from './pages/ResearchRoadmap';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1a1c2e',
                color: '#F5F5F5',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                fontSize: '0.9rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              },
              success: {
                iconTheme: {
                  primary: '#4ADE80',
                  secondary: '#1a1c2e',
                },
              },
              error: {
                iconTheme: {
                  primary: '#F87171',
                  secondary: '#1a1c2e',
                },
              },
            }}
          />
          <Routes>
            {/* Public auth routes — redirect to dashboard if logged in */}
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<AuthPage />} />
              <Route path="/signup" element={<AuthPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>

            {/* Protected routes — redirect to login if not logged in */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-papers" element={<MyPapers />} />
              <Route path="/my-papers/:id" element={<PaperDetails />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/concept-map" element={<ConceptMap />} />
              <Route path="/equation-extractor" element={<EquationExtractor />} />
              <Route path="/research-roadmap" element={<ResearchRoadmap />} />
              <Route path="/settings" element={<Settings />} />
              {/* Removed / gracefully redirected features */}
              <Route path="/summarizer" element={<Navigate to="/dashboard" replace />} />
              <Route path="/compare-papers" element={<Navigate to="/dashboard" replace />} />
              <Route path="/literature-review" element={<Navigate to="/dashboard" replace />} />
              <Route path="/citation-generator" element={<Navigate to="/dashboard" replace />} />
              <Route path="/ppt-generator" element={<Navigate to="/dashboard" replace />} />
              <Route path="/bookmarks" element={<Navigate to="/dashboard" replace />} />
              <Route path="/notes" element={<Navigate to="/dashboard" replace />} />
              <Route path="/help" element={<Navigate to="/settings" replace />} />
            </Route>

            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

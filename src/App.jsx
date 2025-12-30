import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

// Lazy-load heavy page components
const Team = lazy(() => import("./pages/Team"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));

// Fallback component while lazy components load
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-gray-500">Loading...</div>
  </div>
);

const App = () => {
    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="team" element={<Suspense fallback={<LoadingFallback />}><Team /></Suspense>} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projectsDetail" element={<Suspense fallback={<LoadingFallback />}><ProjectDetails /></Suspense>} />
                    <Route path="taskDetails" element={<Suspense fallback={<LoadingFallback />}><TaskDetails /></Suspense>} />
                </Route>
            </Routes>
        </>
    );
};

export default App;

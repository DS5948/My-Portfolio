

// App.jsx or main.jsx
import { Toaster } from "@/components/ui/sonner"; // or shadcn/ui path
import { ToastProvider } from "@/components/ui/use-toast"; // depends on your project structure
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster />
    </ToastProvider>
  );
}

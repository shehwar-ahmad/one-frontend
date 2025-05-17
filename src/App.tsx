import "./App.css";
import { AppRoutes } from "@/router/AppRoutes";
import AppHeader from "@/components/layout/AppHeader";

export default function App() {
  return (
    <div className="max-w-[1512px] mx-auto px-4 lg:px-[60px]">
      <AppHeader />
      <AppRoutes />
    </div>
  );
}

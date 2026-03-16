import { useState, useEffect } from "react";
import { Header } from "./components/Layout/Header";
import { CatalogViewer } from "./components/Catalog/CatalogViewer";
import { CartDrawer } from "./components/Cart/CartDrawer";
import { AdminUnlockModal } from "./components/Admin/AdminUnlockModal";
import { CartProvider } from "./cart/CartContext";
import { isAdminUnlocked } from "./components/Admin/hotspotIO";
import { ProductProvider } from "./context/ProductContext";

function App() {
  const [isAdmin, setIsAdmin] = useState(() => isAdminUnlocked());
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

  const handleAdminLock = () => {
    setAdminUnlocked(false);
    setIsAdmin(false);
  };

  // Keyboard shortcut Ctrl+Shift+A to open admin unlock modal (secret access)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        setIsUnlockModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Header isAdmin={isAdmin} onAdminLock={handleAdminLock} />

          <CatalogViewer isAdmin={isAdmin} />

          <CartDrawer />

          {isUnlockModalOpen && (
            <AdminUnlockModal
              isOpen={true} // It's always open if rendered
              onClose={() => setIsUnlockModalOpen(false)}
              onUnlock={() => setIsAdmin(true)}
            />
          )}
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;

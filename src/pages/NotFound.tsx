import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLocale } from "@/lib/locale";
import { getUiCopy } from "@/lib/uiCopy";

const NotFound = () => {
  const location = useLocation();
  const { locale } = useLocale();
  const copy = getUiCopy(locale);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {copy.notFound}
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {copy.returnHome}
        </a>
      </div>
    </div>
  );
};

export default NotFound;

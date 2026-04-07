import { useEffect } from "react";

interface UsePageMetaOptions {
  title: string;
  description?: string;
}

export const usePageMeta = ({ title, description }: UsePageMetaOptions) => {
  useEffect(() => {
    document.title = title;

    if (!description) return;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    }
  }, [description, title]);
};

export default usePageMeta;

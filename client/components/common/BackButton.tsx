import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ fallback = "/" }: { fallback?: string }) {
  const navigate = useNavigate();
  const onClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
      aria-label="Go back"
    >
      <ArrowLeft className="h-4 w-4" /> Back
    </button>
  );
}

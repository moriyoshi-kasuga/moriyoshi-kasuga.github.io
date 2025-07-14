import { useEffect, useState } from "react";

export function ZoomDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-zoom-in">
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 shadow-lg backdrop-blur-sm">
          <button
            className="absolute top-1 right-1 pb-2.5 pt-1.5 px-4 bg-primary rounded-full hover:bg-primary-foreground transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="transition-transform duration-300 transform scale-110 max-w-4xl">
            {children}
          </div>
        </div>
      )}
    </>
  );
}

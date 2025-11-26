import { useEffect, useRef, useState } from "react";

interface ZoomDialogProps {
  children: React.ReactNode;
}

export function ZoomDialog({ children }: ZoomDialogProps) {
  const [isOpen, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Escapeキーで閉じる
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
  }, []);

  // ダイアログが開いているときはスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // ダイアログが開いたときにフォーカスを移動
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={handleOpen}
        className="cursor-zoom-in border-none bg-transparent p-0"
        type="button"
        aria-label="画像を拡大表示"
      >
        {children}
      </button>

      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="拡大画像表示"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 shadow-lg backdrop-blur-sm"
          onClick={handleClose}
        >
          <button
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-primary text-3xl text-white transition-colors hover:bg-primary-foreground focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
            onClick={handleClose}
            aria-label="閉じる"
            type="button"
          >
            ×
          </button>
          <div
            className="max-w-4xl transform scale-110 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

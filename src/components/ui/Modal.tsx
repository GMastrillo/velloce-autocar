"use client";

import { Fragment, ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  closeOnOverlayClick = true,
  showCloseButton = true,
}: ModalProps) {
  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-7xl",
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <Fragment>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className={cn(
              "w-full bg-bg-card border border-border-subtle rounded-2xl shadow-card transform transition-smooth",
              sizes[size]
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            aria-describedby={description ? "modal-description" : undefined}
            onKeyDown={handleKeyDown}
          >
            {(title || showCloseButton) && (
              <div className="flex items-start justify-between p-6 border-b border-border-subtle">
                <div>
                  {title && (
                    <h2 id="modal-title" className="font-display text-xl font-semibold text-text-primary">
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p id="modal-description" className="text-text-secondary text-sm mt-1">
                      {description}
                    </p>
                  )}
                </div>
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-surface transition-smooth"
                    aria-label="Fechar modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            )}
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
'use client';

import React, { useState } from 'react';
import { announcementConfig } from '@/config/Announcement';

export default function Announcement() {
  const [visible, setVisible] = useState(announcementConfig.enabled);

  if (!announcementConfig.enabled || !visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4">
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-auto w-full max-w-3xl rounded-lg border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md"
      >
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <h4 className="text-base font-semibold text-foreground">
              {announcementConfig.title}
            </h4>
            <p
              className="mt-1 text-sm leading-6 text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: announcementConfig.message }}
            />
          </div>

          <button
            type="button"
            aria-label="Close announcement"
            onClick={() => setVisible(false)}
            className="shrink-0 rounded-md px-2 py-1 text-lg leading-none text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

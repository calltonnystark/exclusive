'use client';

import React, { useState } from 'react';
import { announcementConfig } from '@/config/Announcement';

export default function Announcement() {
  const [visible, setVisible] = useState(announcementConfig.enabled);

  if (!visible) return null;

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pointer-events-none">
      <div className="m-4 w-full max-w-2xl pointer-events-auto rounded-md border bg-white/95 p-4 shadow-lg dark:bg-slate-900/95">
        <div className="flex items-start">
          <div className="flex-1 pr-4">
            <h4 className="text-lg font-semibold">{announcementConfig.title}</h4>
            <p
              className="mt-1 text-sm text-neutral-600 dark:text-neutral-300"
              dangerouslySetInnerHTML={{ __html: announcementConfig.message }}
            />
          </div>

          <button
            aria-label="Close announcement"
            onClick={handleClose}
            className="ml-4 rounded-md px-2 py-1 text-sm text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

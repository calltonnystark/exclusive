/* Announcement configuration
 * Set `enabled` to true to show the announcement popup on site load.
 * Set to false to disable globally.
 * message can contain plain text or simple HTML.
 */

export const announcementConfig = {
  enabled: true, // Toggle to show/hide announcement globally
  title: 'Important Announcement',
  message:
    'Welcome! The site will be undergoing maintenance on 2026-09-01. Some features may be temporarily unavailable.',
  // Increment the version when you want previously dismissed announcements to show again.
  localStorageKey: 'announcement_dismissed_v2',
};

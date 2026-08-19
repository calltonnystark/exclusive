import Script from 'next/script';

export default function UmamiAnalytics() {
  const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;

  // Umami is optional. If the environment variables are not configured,
  // simply skip loading analytics instead of producing a console error.
  if (!umamiSrc || !umamiId) {
    return null;
  }

  return (
    <Script
      id="umami-analytics"
      src={umamiSrc}
      data-website-id={umamiId}
      strategy="afterInteractive"
      async
    />
  );
}

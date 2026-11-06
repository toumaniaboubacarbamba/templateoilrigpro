export function Gear({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.6M12 18.9v2.6M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
    </svg>
  );
}
export function Chevron({ size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}
export function Search({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </svg>
  );
}
export function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M3 13L13 3M5 3h8v8" />
    </svg>
  );
}
export function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}
export function Calendar({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="2" y="3" width="12" height="11" rx="1" />
      <path d="M2 6.5h12M5 1.5v3M11 1.5v3M5 9h2M9 9h2M5 11.5h2" />
    </svg>
  );
}
export function Drop({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5C10 1.5 4 8.2 4 12.2a6 6 0 0012 0C16 8.2 10 1.5 10 1.5zm-2.2 11a.8.8 0 11-1.6 0c0-1.7 1.2-3.2 2-4.2.3-.4.9-.1.7.4-.5 1.1-1.1 2.3-1.1 3.8z" />
    </svg>
  );
}
export function Send({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 3L3 10.5l6.5 2.5L12 20l2.5-6.5L21 3zM9.5 13L21 3" />
    </svg>
  );
}
export function Bell({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 2a5 5 0 00-5 5v3.2L3.5 13v1.5h13V13L15 10.2V7a5 5 0 00-5-5zm-2 14a2 2 0 004 0H8z" />
    </svg>
  );
}
export function Pin({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0e2f3e" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}
export function ChevronRight({ size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M4 2l4 4-4 4" />
    </svg>
  );
}
export function Facebook({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-1 .4-1.7 1.8-1.7h1.6V3.8c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.6H7.4v3.3h2.8V22h3.3z" />
    </svg>
  );
}
export function Instagram({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Youtube({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z" />
    </svg>
  );
}
export function Whatsapp({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm5.2 14.1c-.2.6-1.300 1.200-1.800 1.200-.5.100-1.100.100-1.800-.100-.4-.1-1-.3-1.700-.6-3-1.300-4.900-4.300-5-4.500-.1-.2-1.200-1.600-1.200-3s.8-2.100 1-2.400c.3-.3.600-.3.800-.3h.6c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.3.500-.4.400c-.1.200-.3.300-.1.600.2.300.7 1.200 1.500 1.900 1 .9 1.900 1.200 2.200 1.300.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z" />
    </svg>
  );
}
export function Medal({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M4 1.500h12v10.500l-6 4.500-6-4.500z" />
      <circle cx="10" cy="8" r="2.500" />
    </svg>
  );
}
export function ArrowUpLeft({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M13 13L3 3M11 3H3v8" />
    </svg>
  );
}
export function Twitter({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5.9c-.7.3-1.5.5-2.4.6.9-.5 1.500-1.300 1.800-2.300-.8.500-1.700.8-2.600 1-.8-.8-1.800-1.300-3-1.300-2.300 0-4.100 1.800-4.100 4.100 0 .3 0 .6.1.9-3.400-.2-6.400-1.800-8.400-4.300-.4.600-.6 1.300-.6 2.100 0 1.400.7 2.700 1.800 3.400-.7 0-1.300-.2-1.800-.5v.1c0 2 1.400 3.600 3.300 4-.3.1-.7.1-1.100.1-.3 0-.5 0-.8-.1.5 1.600 2 2.800 3.800 2.900-1.400 1.100-3.200 1.800-5.100 1.800-.3 0-.7 0-1-.1 1.800 1.200 4 1.800 6.300 1.800 7.500 0 11.700-6.200 11.700-11.700v-.5c.8-.6 1.500-1.300 2.100-2.100z" />
    </svg>
  );
}
export function Wordpress({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M5.500 8.500l4.200 11M9.500 8h6M12.200 12.500l3.300 8M15.500 8l3 8.500" />
    </svg>
  );
}
export function Phone({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.600 10.800a15.100 15.100 0 006.600 6.600l2.200-2.200c.3-.3.700-.4 1-.2 1.100.4 2.300.6 3.600.6.600 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.600 21 3 13.400 3 4c0-.6.4-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .7-.2 1l-2.300 2.200z" />
    </svg>
  );
}
export function Mail({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5h18a1 1 0 011 1v.5l-10 6.500L2 6.500V6a1 1 0 011-1zm-1 4l10 6.500L22 9v9a1 1 0 01-1 1H3a1 1 0 01-1-1V9z" />
    </svg>
  );
}
export function Quote({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
      <path d="M0 40V22C0 9 7 1.500 20 0v8c-6 1-9 4.500-9.500 10H20v22H0zm26 0V22C26 9 33 1.500 46 0v8c-6 1-9 4.500-9.500 10H46v22H26z" />
    </svg>
  );
}

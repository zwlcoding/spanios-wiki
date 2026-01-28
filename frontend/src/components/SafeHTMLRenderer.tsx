interface SafeHTMLRendererProps {
  html: string;
  className?: string;
}

export function SafeHTMLRenderer({
  html,
  className = '',
}: SafeHTMLRendererProps) {
  if (!html) return null;

  // Simple HTML sanitization - remove script tags and other dangerous elements
  const sanitizedHTML = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '');

  return (
    <div
      className={`prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}

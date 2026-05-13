interface SafeHTMLRendererProps {
  html: string;
  className?: string;
}

export function SafeHTMLRenderer({
  html,
  className = '',
}: SafeHTMLRendererProps) {
  if (!html) return null;

  const sanitizedHTML = sanitizeTrustedContentHtml(html);

  return (
    <div
      className={`prose max-w-none ${className}`}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Disease and resource HTML is repo-authored content, sanitized here, and rendered for rich medical notes.
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}

function sanitizeTrustedContentHtml(html: string) {
  return html
    .replace(
      /<(script|style|iframe|object|embed|link|meta|base|form|input|button|svg|math)\b[^>]*>[\s\S]*?<\/\1>/gi,
      '',
    )
    .replace(
      /<(script|style|iframe|object|embed|link|meta|base|form|input|button|svg|math)\b[^>]*\/?>/gi,
      '',
    )
    .replace(/\s+on[\w:-]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(
      /\s+(href|src|xlink:href)\s*=\s*("|')?\s*(javascript|data):[^"'\s>]*/gi,
      '',
    );
}

export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  const configuredBase = import.meta.env.BASE_URL;
  const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;
  return path === '/' ? base : `${base}${path.slice(1)}`;
}

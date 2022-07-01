export function createQuery(opts: any): string {
  return Object.keys(opts)
    .map((o) => `_${o}=${opts[o]}`)
    .join('&');
}

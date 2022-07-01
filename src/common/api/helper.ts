export function createQuery(opts: any): string {
  return Object.keys(opts)
    .map((o) => o + '=' + opts[o])
    .join('&');
}

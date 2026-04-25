export default function sitemap() {
  const base = 'https://fishingprofits.com';
  const routes = ['', '/cursos', '/asesorias', '/senales', '/contacto'];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: r === '' ? 1 : 0.8,
  }));
}

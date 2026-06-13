import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://yozan-tech.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about'];

  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    // Add the default un-prefixed route
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    });

    // Add locale-prefixed routes
    routing.locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return entries;
}

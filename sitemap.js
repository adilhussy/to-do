import { parks } from '@/data/parks';

export default function sitemap() {
  const baseUrl = 'https://nycdogparks.com';
  
  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/boroughs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
  
  // Borough pages
  const boroughs = [
    { code: 'M', name: 'manhattan' },
    { code: 'B', name: 'brooklyn' },
    { code: 'Q', name: 'queens' },
    { code: 'X', name: 'bronx' },
    { code: 'R', name: 'staten-island' },
  ];
  
  const boroughPages = boroughs.map(borough => ({
    url: `${baseUrl}/boroughs/${borough.name}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  
  // Individual park pages
  const parkPages = parks.map(park => ({
    url: `${baseUrl}/park/${encodeURIComponent(park.name)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  
  return [...staticPages, ...boroughPages, ...parkPages];
}

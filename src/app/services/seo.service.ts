import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  author?: string;
  locale?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta, private titleService: Title) {}

  updateSEO(data: SEOData) {
    // Update title
    if (data.title) {
      this.titleService.setTitle(data.title);
      this.meta.updateTag({ property: 'og:title', content: data.title });
      this.meta.updateTag({ name: 'twitter:title', content: data.title });
    }

    // Update description
    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
      this.meta.updateTag({
        property: 'og:description',
        content: data.description,
      });
      this.meta.updateTag({
        name: 'twitter:description',
        content: data.description,
      });
    }

    // Update keywords
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Update URL
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
      this.meta.updateTag({ name: 'twitter:url', content: data.url });
    }

    // Update image
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }

    // Update type
    if (data.type) {
      this.meta.updateTag({ property: 'og:type', content: data.type });
    }

    // Update author
    if (data.author) {
      this.meta.updateTag({ name: 'author', content: data.author });
    }

    // Update locale
    if (data.locale) {
      this.meta.updateTag({ property: 'og:locale', content: data.locale });
    }
  }

  // Method to add structured data (JSON-LD)
  addStructuredData(data: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Remove structured data
  removeStructuredData() {
    const scripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    scripts.forEach((script) => script.remove());
  }
}

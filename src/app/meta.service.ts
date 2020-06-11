import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MetaTag } from './meta-tag';

@Injectable({
  providedIn: 'root'
})
export class CustomMetaService {

  private METAS = ['image', 'title', 'url', 'description'];
  private SITES = ['og', 'twitter'];

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  public setSocialMediaTags(url: string, title: string, description: string, image: string): void {
    const values = {
      url: url,
      title: title,
      description: description,
      image: `https://kdhttps.github.io/assets/${image}`
    }
    const imageUrl: string = `assets/${image}`;
    const tags: Array<MetaTag> = [];
    this.SITES.forEach((s) => {
      this.METAS.forEach((m) => {
        tags.push(new MetaTag(`${s}:${m}`, values[m], s === 'og'));
      });
    });

    tags.forEach(siteTag => {
      if (siteTag.isFacebook) {
        this.metaService.updateTag({ property: siteTag.name, content: siteTag.value });
      } else {
        this.metaService.updateTag({ name: siteTag.name, content: siteTag.value });
      }
    });
  }
}

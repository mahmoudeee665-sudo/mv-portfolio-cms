import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAbout extends Struct.ComponentSchema {
  collectionName: 'components_shared_abouts';
  info: {
    displayName: 'About';
    icon: 'arrowRight';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    heroDescription: Schema.Attribute.Text;
    heroDesign: Schema.Attribute.Enumeration<['magic_ball', 'robot']>;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
  };
}

export interface SharedProject extends Struct.ComponentSchema {
  collectionName: 'components_shared_projects';
  info: {
    displayName: 'project';
    icon: 'arrowDown';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    liveUrl: Schema.Attribute.String;
    repoUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-link';
    icon: 'apps';
  };
  attributes: {
    provider: Schema.Attribute.Enumeration<
      ['github', 'instagram', 'linkedin', 'facebook', 'x', 'youtube', 'website']
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about': SharedAbout;
      'shared.hero-section': SharedHeroSection;
      'shared.project': SharedProject;
      'shared.social-link': SharedSocialLink;
    }
  }
}

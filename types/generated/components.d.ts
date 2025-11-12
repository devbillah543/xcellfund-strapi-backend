import type { Schema, Struct } from '@strapi/strapi';

export interface BrandBrand extends Struct.ComponentSchema {
  collectionName: 'components_brand_brand';
  info: {
    description: 'Reusable brand component with customizable styles for logo, colors, and typography';
    displayName: 'Brand';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.DefaultTo<''>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_card';
  info: {
    description: 'A card component to highlight features with an icon, title, description, and optional link.';
    displayName: 'Basic Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.Component<'link.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CarouselCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousel';
  info: {
    description: 'A carousel component that displays multiple carousel items in a sliding format.';
    displayName: 'Carousel';
  };
  attributes: {
    items: Schema.Attribute.Component<'carousel.carousel-item', true> &
      Schema.Attribute.Required;
  };
}

export interface CarouselCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousel_item';
  info: {
    description: 'An individual item within a carousel component, containing an image and optional caption.';
    displayName: 'Carousel Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'link.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface CommonHero extends Struct.ComponentSchema {
  collectionName: 'components_common_Hero';
  info: {
    description: 'Hero section component with title, subtitle, background image, and call-to-action link';
    displayName: 'Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'link.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterBranding extends Struct.ComponentSchema {
  collectionName: 'components_footer_branding';
  info: {
    description: 'Footer branding component for displaying logos and brand information';
    displayName: 'Branding';
  };
  attributes: {
    brand_name: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tagline: Schema.Attribute.String;
  };
}

export interface FooterCopyright extends Struct.ComponentSchema {
  collectionName: 'components_footer_copyright';
  info: {
    description: 'Footer copyright component for displaying copyright information';
    displayName: 'Copyright';
  };
  attributes: {
    links: Schema.Attribute.Component<'link.link', true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer';
  info: {
    description: 'Main footer component that includes branding, quicklinks, and copyright information';
    displayName: 'Footer';
  };
  attributes: {
    branding: Schema.Attribute.Component<'footer.branding', false> &
      Schema.Attribute.Required;
    copyright: Schema.Attribute.Component<'footer.copyright', false> &
      Schema.Attribute.Required;
    location: Schema.Attribute.Component<'footer.location', false> &
      Schema.Attribute.Required;
    quicklinks: Schema.Attribute.Component<'footer.quicklink', false> &
      Schema.Attribute.Required;
    subscription: Schema.Attribute.Component<'footer.subscription', false>;
  };
}

export interface FooterLocation extends Struct.ComponentSchema {
  collectionName: 'components_footer_location';
  info: {
    description: 'Footer location component for displaying address and map information';
    displayName: 'Location';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    email: Schema.Attribute.Component<'link.link', false>;
    map_embed_url: Schema.Attribute.String;
    phone: Schema.Attribute.Component<'link.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterQuicklink extends Struct.ComponentSchema {
  collectionName: 'components_footer_quicklink';
  info: {
    description: 'Footer quicklink component for displaying a list of important links';
    displayName: 'Quicklink';
  };
  attributes: {
    links: Schema.Attribute.Component<'link.link', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSubscription extends Struct.ComponentSchema {
  collectionName: 'components_footer_subscription';
  info: {
    description: 'Footer subscription component for newsletter sign-ups';
    displayName: 'Subscription';
  };
  attributes: {
    input: Schema.Attribute.Component<'form.input', false> &
      Schema.Attribute.Required;
    social_links: Schema.Attribute.Component<'link.link', true>;
  };
}

export interface FormInput extends Struct.ComponentSchema {
  collectionName: 'components_form_input';
  info: {
    description: 'Form text input component for user input';
    displayName: 'Text Input';
  };
  attributes: {
    icon_position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    iconify: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'tel', 'password', 'number', 'textarea']
    > &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface HomeContactBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_banner';
  info: {
    description: 'A banner component for the contact section on the home page.';
    displayName: 'Contact Banner';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    card: Schema.Attribute.Component<'card.card', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeForm extends Struct.ComponentSchema {
  collectionName: 'components_home_form';
  info: {
    description: 'A form component for the home page.';
    displayName: 'Form';
  };
  attributes: {
    fields: Schema.Attribute.Component<'form.input', true>;
    submit_link: Schema.Attribute.Component<'link.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    description: 'A component to showcase various services offered, each represented by a card.';
    displayName: 'Services';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.card', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_home_who_we_are';
  info: {
    description: 'Who We Are section component for the home page.';
    name: 'Who We Are';
  };
  attributes: {
    left_content: Schema.Attribute.Component<'card.card', false> &
      Schema.Attribute.Required;
    right_content: Schema.Attribute.Component<'card.card', false> &
      Schema.Attribute.Required;
  };
}

export interface HomeWhoWeAreBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_who_we_are_banner';
  info: {
    description: 'A banner component for the Who We Are section on the home page.';
    displayName: 'Who We Are Banner';
  };
  attributes: {
    content: Schema.Attribute.Component<'card.card', false> &
      Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_link';
  info: {
    description: 'Reusable link component with customizable URL, text, and styles';
    displayName: 'Link';
  };
  attributes: {
    icon_position: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    iconify: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    link_type: Schema.Attribute.Enumeration<['link', 'button']> &
      Schema.Attribute.DefaultTo<'link'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    social_media: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    social_media_platform: Schema.Attribute.Enumeration<
      ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube']
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    url_type: Schema.Attribute.Enumeration<['text', 'email', 'phone']> &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface NavigationMenu extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu';
  info: {
    description: 'Navigation menu component containing multiple link items';
    displayName: 'Menu';
  };
  attributes: {
    item: Schema.Attribute.Component<'link.link', false> &
      Schema.Attribute.Required;
    subitems: Schema.Attribute.Component<'link.link', true>;
  };
}

export interface NavigationNavigation extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation';
  info: {
    description: 'Navigation component containing multiple menu items';
    displayName: 'Navigation';
  };
  attributes: {
    brand: Schema.Attribute.Component<'brand.brand', false> &
      Schema.Attribute.Required;
    menus: Schema.Attribute.Component<'navigation.menu', true>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo';
  info: {
    description: 'Component for managing SEO metadata for pages';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    openGraphImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface TopbarContacts extends Struct.ComponentSchema {
  collectionName: 'components_topbar_contact';
  info: {
    description: 'Reusable contact component for displaying contact information such as email and phone number';
    displayName: 'Contacts';
  };
  attributes: {
    contact_links: Schema.Attribute.Component<'link.link', true>;
  };
}

export interface TopbarSocials extends Struct.ComponentSchema {
  collectionName: 'components_topbar_socials';
  info: {
    description: 'Reusable social media links component for displaying social media profiles with customizable icons and URLs';
    displayName: 'Socials';
  };
  attributes: {
    social_links: Schema.Attribute.Component<'link.link', true>;
  };
}

export interface TopbarTopbar extends Struct.ComponentSchema {
  collectionName: 'components_topbar_topbar';
  info: {
    description: 'Reusable topbar component for displaying brand, contacts, and social media links';
    displayName: 'Topbar';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'topbar.contacts', false> &
      Schema.Attribute.Required;
    socials: Schema.Attribute.Component<'topbar.socials', false> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brand.brand': BrandBrand;
      'card.card': CardCard;
      'carousel.carousel': CarouselCarousel;
      'carousel.carousel-item': CarouselCarouselItem;
      'common.hero': CommonHero;
      'footer.branding': FooterBranding;
      'footer.copyright': FooterCopyright;
      'footer.footer': FooterFooter;
      'footer.location': FooterLocation;
      'footer.quicklink': FooterQuicklink;
      'footer.subscription': FooterSubscription;
      'form.input': FormInput;
      'home.contact-banner': HomeContactBanner;
      'home.form': HomeForm;
      'home.services': HomeServices;
      'home.who-we-are': HomeWhoWeAre;
      'home.who-we-are-banner': HomeWhoWeAreBanner;
      'link.link': LinkLink;
      'navigation.menu': NavigationMenu;
      'navigation.navigation': NavigationNavigation;
      'seo.seo': SeoSeo;
      'topbar.contacts': TopbarContacts;
      'topbar.socials': TopbarSocials;
      'topbar.topbar': TopbarTopbar;
    }
  }
}

export interface SocialNetwork {
  name: string;
  icon: string;
  link: string;
  cover: string;
  color: string;
  class: string;
}

export const socialNetworks: SocialNetwork[] = [
  {
    name: 'Youtube',
    link: 'https://www.youtube.com',
    cover: '61/1440/720',
    icon: 'youtube',
    color: '#FF0000',
    class: 'youtube'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com',
    cover: '62/1440/720',
    icon: 'instagram',
    color: '#C6336B',
    class: 'instagram'
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
    cover: '63/1440/720',
    icon: 'facebook',
    color: '#365899',
    class: 'facebook'
  },
  {
    name: 'Site',
    link: 'https://picsum.photos',
    cover: '64/1440/720',
    icon: 'link',
    color: '#0000FF',
    class: 'site'
  }
];

import Facebook from '../../assets/images/facebook.svg';
import Twitter from '../../assets/images/twitter.svg';
import Pinterest from '../../assets/images/pinterest.svg';
import Instagram from '../../assets/images/instagram.svg';

export default {
  namespaced: true,
  state() {
    return {
      linksList: [
        {
          title: 'Features',
          linksItems: ['Link Shortening', 'Branded Links', 'Analytics']
        },
        {
          title: 'Resources',
          linksItems: ['Blog', 'Developers', 'Support']
        },
        {
          title: 'Company',
          linksItems: ['About', 'Our Team', 'Careers', 'Contact']
        }
      ],
      icons: [
        { link: 'https://uk-ua.facebook.com', icon: Facebook },
        { link: 'https://x.com', icon: Twitter },
        { link: 'https://www.pinterest.com', icon: Pinterest },
        { link: 'https://www.instagram.com', icon: Instagram }
      ]
    };
  }
};

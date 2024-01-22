import { PATH } from './paths';

export const footerMenu = {
  about: [
    {
      to: PATH.about,
      title: 'About us',
    },
    {
      to: PATH.privacySecurity,
      title: 'Privacy&Security',
    },
    {
      to: PATH.contact,
      title: 'Contact us',
    },
  ],
  help: [
    {
      to: PATH.helpCenter,
      title: 'Help center',
    },
    {
      to: PATH.faq,
      title: 'FAQs',
    },
  ],
  account: [
    {
      to: PATH.settings,
      title: 'Edit profile',
    },
    {
      to: PATH.orders,
      title: 'My orders',
    },
  ],
};

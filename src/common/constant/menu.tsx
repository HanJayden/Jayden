import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';
import { FiPocket as HomeIcon, FiUser as ProfileIcon } from 'react-icons/fi';
import { SiJavascript } from 'react-icons/si';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Portfolio',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: 'Playground',
    href: '/playground',
    icon: <SiJavascript size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Playground',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:abdacadabra102192@gmail.com',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-green-600 border border dark:border-neutral-700',
    type: 'Link',
  },

  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/jayden/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    className: '!bg-blue-500 border border dark:border-neutral-700',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/ethhandy',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-black border border dark:border-neutral-700',
    type: 'Link',
  },
];

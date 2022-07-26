import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.scss';
import {
  ChatIcon,
  ExitIcon,
  HomeIcon,
  MarketIcon,
  SearchIcon,
  SettingsIcon,
} from '../../assets/icons';
import { RoutesMap } from '../../common/const';

const NavListItems = [
  {
    link: RoutesMap.Main,
    icon: <HomeIcon />,
  },
  {
    link: RoutesMap.Market,
    icon: <MarketIcon />,
  },
  {
    link: RoutesMap.Search,
    icon: <SearchIcon />,
  },
];

const UserToolsItem = [
  {
    link: RoutesMap.Setting,
    icon: <SettingsIcon />,
  },
  {
    link: RoutesMap.Message,
    icon: <ChatIcon />,
  },
  {
    link: RoutesMap.Exit,
    icon: <ExitIcon />,
  },
];

export const NavBar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {NavListItems.map(({ link, icon }) => (
          <li key={link}>
            <Link
              to={link}
              className={`${styles.nav_list_link} ${
                link === pathname ? styles.nav_list_link__active : ''
              }`}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.nav_list}>
        {UserToolsItem.map(({ link, icon }) => (
          <li key={link}>
            <Link
              to={link}
              className={`${styles.nav_list_link} ${
                link === pathname ? styles.nav_list_link__active : ''
              }`}
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

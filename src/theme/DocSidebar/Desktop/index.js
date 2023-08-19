import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import NavbarSearch from '@theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import styles from './styles.module.css';
function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
  const {
    navbar: { hideOnScroll, title, items },
    docs: {
      sidebar: { hideable },
    },
  } = useThemeConfig();

  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}
    >
      <div className={clsx(styles.title)}>{title}</div>

      {!searchBarItem && (
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>
      )}

      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
}
export default React.memo(DocSidebarDesktop);

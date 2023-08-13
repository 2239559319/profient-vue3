import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <div className={clsx(styles.header)}>
      <div className={clsx(styles['header-left'])}>
        <div className={styles.title}>profient vue3</div>
        <div className={styles['title-cn']}>精通vue3源码</div>
      </div>
      <div className={styles['header-right']}>
        <img src="/img/pv-cover.png" width={400} height={400} />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title}>
      <HomepageHeader />
      <div style={{ padding: '40px' }}>
        <p>
          精通vue3源码旨在让没有读过源码的朋友深入了解vue3的运行，同时用配图的方式来梳理整个流程。
        </p>
        <p>
          vue3的源码构成相比于react十分清晰明了，使用chrome
          devtools的断点以及performance record十分利于调试，方便新手入门
        </p>

        <a href="/docs/chapters/chapter1/">开始</a>
      </div>
    </Layout>
  );
}

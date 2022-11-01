import React, {ReactNode, useEffect, useState} from 'react';
import {Layout} from 'antd';
import Helmet from 'react-helmet';
import {Header, Footer} from '@/components/index';

const {Content,} = Layout;

export interface ILayoutProps {
  children: ReactNode;
  helmet: IHelmet;
  header?: boolean
}

export interface IHelmet {
  title?: string;
  description?: string;
  lang?: string;
  isRoot?: boolean;
}

export const MainLayout = (props: ILayoutProps) => {
  const {children, helmet, header = false} = props;
  const [title, setTitle] = useState(helmet.title);

  useEffect(() => {
    if (helmet.isRoot) {
      setTitle('Playground');
    } else {
      setTitle(`${helmet.title} | Playground`);
    }
  }, [helmet]);

  return (
    <Layout className="mainLayout">
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={helmet.description} />
        </Helmet>
      </div>
      {header && <Header />}
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

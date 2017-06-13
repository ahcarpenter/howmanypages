/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import withProgressBar from 'components/ProgressBar';
import ActionCableProvider from 'react-actioncable-provider'

export function App(props) {
  return (
    <ActionCableProvider
      url={process.env.ACTION_CABLE_URL}
    >
      <div>
        <Helmet
          titleTemplate="%s - How many pages?"
          defaultTitle="How many pages?"
          meta={[
            { name: 'description', content: 'An application to tell you how many pages to which a repo would print' },
          ]}
        />
        <Header />
        {React.Children.toArray(props.children)}
      </div>
    </ActionCableProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);

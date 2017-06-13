/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';

import { Container } from 'reactstrap'
import margaretHamilton from '!file-loader?name=[name].[ext]!./images/margaret-hamilton.png'

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container className="text-center">
        <Helmet
          title="About"
          meta={[
            { name: 'description', content: "About page of 'How many pages?' application" },
          ]}
        />
        <p>
          <img className="img-fluid" src={margaretHamilton} alt="Margaret Hamilton with stack of code" />
        </p>
        <p>
          With curiosity initially sparked by the viewing of the above pic of Margaret Hamilton and her massive stack of code for the Apollo project, I decided to build-out an app that would facilitate determining the number of pages modern day repos themselves would take to print out.
        </p>
      </Container>
    );
  }
}

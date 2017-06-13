/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Form from './Form';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import { makeSelectLoc } from 'containers/RepoListItem/selectors';
import ReposList from 'components/ReposList'
import { Jumbotron, Button, InputGroup, Input } from 'reactstrap'
import NumberEasing from 'react-number-easing'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <div>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: "About page of 'How many pages?' application" },
          ]}
        />
        <Jumbotron>
          <div hidden={this.props.jumbotronHidden}>
            <h1 className="display-3">
              {`How many pages? `}
              {this.props.loc === 0 ?
                null
                :
                <NumberEasing
                  value={this.props.loc / 64}
                  speed={300}
                  ease='quintInOut'
                />
              }
            </h1>
            <p className="lead">
              How many pages of code would your repo be?
            </p>
          </div>
          <p>
            <Form onSubmit={this.props.onSubmitForm}>
              <InputGroup size="lg">
                <Input
                  id="username"
                  type="text"
                  placeholder="Search repos by username"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                  aria-label="Search repos by username"
                />
              </InputGroup>
            </Form>
          </p>
          <ReposList {...reposListProps} />
          <div hidden={this.props.jumbotronHidden}>
            <hr className="my-2" />
            <p>Using GitHub's <a href="https://github.com/github/linguist" target="_blank" rel="noopener">Linguist</a> and some good, old-fashioned guesstimation to estimate the number of 8.5"x11" pages it would take to print out a repo </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  loc: makeSelectLoc()
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import { makeSelectCurrentUser } from 'containers/App/selectors'
import { loadLoc, locLoaded, changeRepo, changeRepoUser } from './actions';
import { ActionCable } from 'react-actioncable-provider'
import { ListGroupItem } from 'reactstrap'
import FontAwesome from 'react-fontawesome'
import { makeSelectRepo, makeSelectLoading, makeSelectRepoUser } from './selectors'

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    let nameprefix = '';
    const active = this.props.repo === item.name && this.props.repoUser === item.owner.login
    // debugger
    // console.log('ActionCable', ActionCable())
    // const cable = ActionCable.props.createConsumer('ws://localhost:3000/cable')

    // debugger
    // item.owner.login
    // item.name

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (item.owner.login !== this.props.currentUser) {
      nameprefix = `${item.owner.login}/`;
    }

    // Put together the content of the repository
    const content = (
      <ListGroupItem active={active} onClick={this.props.onListItemClicked} className="justify-content-between" tag="a" action>
        <a
          href={item.html_url}
          target="_blank"
          rel="noopener"
        >
          {nameprefix + item.name}
        </a>
        <FontAwesome
          name="spinner"
          hidden={!active || !this.props.loading}
          spin={true}
          style={{ color: 'white' }}
        />
      </ListGroupItem>
    );

    // Render the content into a list item
    return (
      <div>
        <ActionCable
          channel={{channel: 'LocChannel', username: item.owner.login, repository: item.name}}
          onReceived={(message) => {
            if(this.props.repoUser === message.repository.username && this.props.repo === message.repository.name) {
              this.props.onLocReceived(message)
            }
          }}
        />
        <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
      </div>
    );
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.object,
  repoUser: React.PropTypes.string
};

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onListItemClicked: () => {
      dispatch(changeRepoUser(ownProps.item.owner.login))
      dispatch(changeRepo(ownProps.item.name))
      dispatch(loadLoc())
    },
    onLocReceived: (message) => {
      dispatch(locLoaded(message.repository.loc, true))
    },

  };
}

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
  repoUser: makeSelectRepoUser(),
  repo: makeSelectRepo(),
  loading: makeSelectLoading()
}), mapDispatchToProps)(RepoListItem);

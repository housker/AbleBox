import React from 'react';
import Helmet from 'react-helmet';
import { Col, Button } from 'reactstrap';
import $ from 'jquery';

class Share extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // change file acl to public
    $.ajax({
      type: 'GET',
      url: '/share',
      data: this.props.file,
      contentType: 'application/json; charset=utf-8',
    })
    .done(() => {
      FB.ui({
        method: 'share',
        display: 'popup',
        href: 'https://s3-us-west-1.amazonaws.com/ablebox/' + this.props.file.s3_objectId
      }, function(response){});
    })
    .fail(() => {
      alert('failed to share');
    });
  }

  render () {
    return (
      <React.Fragment>
        <Helmet>
          <meta property="og:url" content={'"https://s3-us-west-1.amazonaws.com/ablebox/' + this.props.file.s3_objectId + '"'}/>
          <meta property="og:title" content={'"' + this.props.file.name + '"'} />
        </Helmet>
        <Button className="btn btn-sm btn-outline-success" onClick={this.handleClick}>Share</Button>
      </React.Fragment>
    );
  }
}

export default Share;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TabContent,
  TabPane,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { fetchSiteSettings } from '../actions';
import SettingForm from '../components/forms/settingForm';
import ApiSettingForm from '../components/forms/apiSettingForm';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSiteSettings());
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSettingSubmit = values => {
    console.log(values);
  }

  handleApiSettingSubmit = values => {
    console.log(values);
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { settings } = this.props;
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.settings" />
        </h3>
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                <FormattedMessage id="sys.basicInfo" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                <FormattedMessage id="sys.apiKeys" />
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab} className="bg-white padding-v20 padding-h20">
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <SettingForm onSubmit={this.handleSettingSubmit} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <ApiSettingForm onSubmit={this.handleApiSettingSubmit} />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(injectIntl(Setting));
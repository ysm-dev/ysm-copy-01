import React from 'react';
import _ from 'lodash';

import {toStyleObj, safePrefix} from '../utils';
import Branding from './Branding';
import Navigation from './Navigation';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header">
              {_.get(this.props, 'img_path') ? 
              <div id="header-bg" className="site-header-bg" style={toStyleObj('background-image:url(\'' + safePrefix(_.get(this.props, 'img_path')) + '\')')}/>
               : (_.get(this.props, 'site.siteMetadata.header.bg_img') && 
              <div id="header-bg" className="site-header-bg" style={toStyleObj('background-image:url(\'' + safePrefix(_.get(this.props, 'site.siteMetadata.header.bg_img')) + '\')')}/>
              )}
              <div className="site-header-scroll">
                <div className="site-header-inside">
                  <div className="site-header-vertical">
                    <Branding {...this.props} />
                    <Navigation {...this.props} />
                  </div>
                </div>
              </div>
            </header>
        );
    }
}

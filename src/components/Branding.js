import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Branding extends React.Component {
    render() {
        return (
            <div className="site-branding">
              {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
              <p className="site-logo">
                <Link to={safePrefix('/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))}
                    alt="Logo" /></Link>
              </p>
              }
              {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') ? 
              <h1 className="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></h1>
               : 
              <p className="site-title"><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</Link></p>
              }
              {_.get(this.props, 'pageContext.site.siteMetadata.header.tagline') && 
              <p className="site-description">{_.get(this.props, 'pageContext.site.siteMetadata.header.tagline')}</p>
              }
            </div>
        );
    }
}

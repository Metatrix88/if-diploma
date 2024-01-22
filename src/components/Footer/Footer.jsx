import React from 'react';
import { NavLink } from 'react-router-dom';

// constants
import { footerMenu } from '../../constants/footerMenu';

// icons
import { Facebook, Instagram } from '../../assets/icons';

// components
import { Container } from '../Container';

// styles
import { useFooterStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useFooterStyles();
  return (
    <div className={classes.wrapperFooter}>
      <Container className={classes.footer}>
        <div className={classes.footerMenu}>
          <ul className={classes.list}>
            <li className={classes.title}>
              <h6>About Fox Library</h6>
            </li>
            {footerMenu.about.map(({ to, title }) => (
              <li key={to} className={classes.item}>
                <NavLink to={to} className={classes.link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={classes.list}>
            <li className={classes.title}>
              <h6>Help</h6>
            </li>
            {footerMenu.help.map(({ to, title }) => (
              <li key={to} className={classes.item}>
                <NavLink to={to} className={classes.link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={classes.list}>
            <li className={classes.title}>
              <h6>My account</h6>
            </li>
            {footerMenu.account.map(({ to, title }) => (
              <li key={to} className={classes.item}>
                <NavLink to={to} className={classes.link}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.footerConnect}>
          <h6 className={classes.title}>Stay connected</h6>
          <div className={classes.media}>
            <NavLink to="#">
              <Instagram />
            </NavLink>
            <NavLink to="#">
              <Facebook />
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

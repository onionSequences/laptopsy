import { withRouter } from "react-router";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, history, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match}${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="menu-item"
    >
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="subtitle">SHOP NOW</p>
      </div>
    </div>
  );
};
export default MenuItem;

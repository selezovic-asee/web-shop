import "./Badge.css";
import "../../../webSite/css/styles.css";

const Badge = () => {
  return (
    <>
      <span className="badge badge--primary">10% Off</span>
      <span className="badge badge--secondary">10% Off</span>
      <span className="badge badge--primary badge--small">10% Off</span>
    </>
  );
};

export default Badge;

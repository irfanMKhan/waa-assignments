import { propsType } from "../type";


const NavigationItems = (props: propsType) => {
  const { tabs, setActiveTab } = props;
  return (
    <div className="reply-navigation">
      <ul className="nav-bar">
        <li className="nav-title">
          <span className="nav-title-text">Comments</span>
          {/* Like */}
          <span className="total-reply">{10}</span>
        </li>
        <li className="nav-sort">
          {tabs.map((tab) => (
            <span
              className="nav-item"
              key={tab.type}
              onClick={() => setActiveTab(tab.type)}
            >
              {tab.text}
            </span>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default NavigationItems;

import PropTypes from "prop-types";
import Style from './Profile.module.css'
export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    return (
        <div className={Style.profile}>
  <div className={Style.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={Style.avatar}
    />
     <p className={Style.name}>{ username }</p>
     <p className={Style.tag}>@{ tag }</p>
     <p className={Style.location}>{ location }</p>
  </div>

  <ul className={Style.stats}>
    <li>
      <span className={Style.label}>Followers</span>
      <span className={Style.quantity}>{ followers}</span>
    </li>
    <li>
      <span className={Style.label}>Views</span>
      <span className={Style.quantity}>{ views}</span>
    </li>
    <li>
      <span className={Style.label}>Likes</span>
      <span className={Style.quantity}>{ likes}</span>
    </li>
  </ul>
</div>
    );
}
Profile.propType = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}
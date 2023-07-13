import './Card.css';
import star from '../assets/star.png';

const Card = (props) => {
  const {
    title,
    coverImg,
    imgAlt,
    amount,
    country,
    meeting,
    openSpots,
    stats = { rate, price },
  } = props;
  let badgeText;
  if (openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (meeting === 'online') {
    badgeText = 'ONLINE';
  }

  return (
    <article className="card">
      {/* If badgeText has value render badge */}
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={coverImg} className="card__img" alt={imgAlt} />
      <div className="card__content">
        <div className="card__rating">
          <img src={star} className="card__rating-img " alt="star" />
          <span className="card__rating-rate">{stats.rate}</span>
          <span className="card__rating-count card__rating--gray">
            ({stats.count})
          </span>
          <span className="card__rating-dot card__rating--gray"></span>
          <span className="card__rating-county card__rating--gray">
            {country}
          </span>
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__price">
          <strong>From ${amount}</strong> / person
        </p>
      </div>
    </article>
  );
};

export default Card;

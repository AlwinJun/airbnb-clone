import './Card.css';
import zafares from '../assets/zafares.png';
import star from '../assets/star.png';

const Card = () => {
  return (
    <section className="card">
      <img src={zafares} className="card__img" alt="swimmer" />
      <div className="card__content">
        <div className="card__rating">
          <img src={star} className="card__rating-img " alt="star" />
          <span className="card__rating-rate">5.0</span>
          <span className="card__rating-count card__rating--gray">(6)</span>
          <span className="card__rating-dot card__rating--gray"></span>
          <span className="card__rating-county card__rating--gray">USA</span>
        </div>
        <h3 className="card__title">Life lessons with Katie Zaferes</h3>
        <p className="card__price">
          <strong>From $136</strong> / person
        </p>
      </div>
    </section>
  );
};

export default Card;

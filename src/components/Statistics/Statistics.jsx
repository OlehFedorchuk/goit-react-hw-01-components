import PropTypes from 'prop-types';
import Style from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
  return (
    <section className={Style.statistics}>
      {title && <h2 className={Style.title}>{title}</h2>}
      <ul className={Style.statList}>
        {stats.map((stat) => (
          <li className={Style.item} key={stat.id}>
            <span className={Style.label}>{stat.label}</span>
            <span className={Style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,

      
    }),
  )
}
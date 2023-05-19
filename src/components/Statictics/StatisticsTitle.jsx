import PropTypes from 'prop-types';

import { Title } from './Statistics.styled';


export default function StatisticTitle({ title }) {

  return (
    title && <Title>{title}</Title>
  );
}

StatisticTitle.propTypes = {
    title: PropTypes.string,
}
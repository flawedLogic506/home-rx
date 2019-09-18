/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {connect} from 'react-redux';

import HouseCard from '../components/HouseCard';

const DashboardPage = props => (
  <div css={css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `}>
    
    {
      props.houses.map(house => <HouseCard key={house.id} house={house} />)
    }
  </div>
);

const mapStateToProps = state => ({houses: state.houses});
export default connect(mapStateToProps)(DashboardPage);
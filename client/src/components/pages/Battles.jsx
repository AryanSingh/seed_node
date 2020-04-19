import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {fetchBattles, fetchLocations} from "../../actions";
import BattleCard from './BattleCard';
import styled from 'styled-components';
import api from '../../api'

export class Battles extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

	componentDidMount() {
		this.props.fetchBattles();
	}

	componentDidUpdate(prevProps, prevState){
  	if(prevProps.battles !== this.props.battles){
  		// debugger
		}
	}

  render() {
    return (
      <OutsideContainer>
        <h2>List of Battles</h2>
				<ContainerBattles>
        {this.props.battles.map(battle => (
        	<BattleCard battle={battle} key={battle.name}/>
        ))}
				</ContainerBattles>
			</OutsideContainer>
    )
  }

}
const mapDispatchToProps = dispatch => {
	return {
		fetchBattles: () => dispatch(fetchBattles()),
		fetchLocations: () => dispatch(fetchLocations())
	}
};


const mapStateToProps = state => {
  return {
  	battles: state.battles,
		locations: state.locations
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Battles);

const ContainerBattles = styled.div`
	
`;

const OutsideContainer = styled.div`
	
`;

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {fetchBattles, fetchLocations, searchBattles} from "../../actions";
import BattleCard from './BattleCard';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import api from '../../api';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
var debounce = require('debounce');

export class Battles extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	searchOpen: false,
			locationValue: ''
    }
  }

	componentDidMount() {
		this.props.fetchBattles();
		this.props.fetchLocations();
	}

	componentDidUpdate(prevProps, prevState){
  	if(prevProps.battles !== this.props.battles){
  		// debugger
		}
	}

	locationSearch = (location) => {
		this.setState({ locationValue: location });
		this.props.searchBattles(location);

	};

  render() {
    return (
      <OutsideContainer>
        <h2>List of Battles</h2>
				{this.state.searchOpen &&

					<InputContainer>

				<Autocomplete
					id="combo-box-demo"
					options={this.props.locations}
					getOptionLabel={(option) => option}
					style={{width: 300}}
					onChange={(event, value, reason) => this.locationSearch(value)}
					value={this.state.locationValue}
					renderInput={(params) => <TextField {...params} label="Search by location" variant="outlined"/>}

				/>
					</InputContainer>
				}

				{!this.state.searchOpen && <Icon onClick={() => this.setState({ searchOpen: true})} name='search' size='large' /> }
				<ContainerBattles>
        {this.props.battles.map(battle => (
        	<BattleCard battle={battle} key={battle._id}/>
        ))}
				</ContainerBattles>
			</OutsideContainer>
    )
  }

}
const mapDispatchToProps = dispatch => {
	return {
		fetchBattles: () => dispatch(fetchBattles()),
		fetchLocations: () => dispatch(fetchLocations()),
		searchBattles: (param) => dispatch(searchBattles(param))
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
	position: relative;
	z-index: 999;
`;

const InputContainer = styled.div`
	width: 60%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: auto;
`;

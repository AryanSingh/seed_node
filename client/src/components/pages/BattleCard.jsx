import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dany from '../../images/dany.png';
import joffrey from '../../images/joffrey.jpg'
import jon from '../../images/jon snow.jpg';
import robb from '../../images/robb_stark.jpg';
import Avatar from '@material-ui/core/Avatar';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));




export default class BattleCard extends Component {

	kingSrc = (name) => {
		if(name === 'jon'){
			return jon
		} else if(name === 'Joffrey/Tommen Baratheon'){
			return joffrey
		} else if(name === 'Robb Stark'){
			return robb
		}
		return null
	}
	render() {
		const {battle} = this.props;


		return (
			<Container>
				<Name>{battle.name}</Name>
				<Year><CommonSpan>Year: </CommonSpan> {battle.year}</Year>
				<Location><CommonSpan>Location: </CommonSpan>{`${battle.location}, ${battle.region}`}</Location>
				<BattleType><CommonSpan>Battle Type: </CommonSpan>{battle.battle_type}</BattleType>
				<Wrapper>
					<LeftWrapper>
						<Attacker>Attacker</Attacker>
						<Avatar src={this.kingSrc(battle.attacker_king)}  style={{width:100, height:100}}/>
						<ArmySize><CommonSpan>Army: </CommonSpan>{battle.attacker_size}</ArmySize>
						<King><CommonSpan>King: </CommonSpan>{battle.attacker_king}</King>
						<Commander><CommonSpan>Commander: </CommonSpan>{battle.attacker_commander}</Commander>
					</LeftWrapper>
					<RightWrapper>
						<Defender>Defender</Defender>
						<Avatar src={this.kingSrc(battle.defender_king)} style={{width:100, height:100}}/>
						<ArmySize><CommonSpan>Army: </CommonSpan>{battle.defender_size}</ArmySize>
						<King><CommonSpan>King: </CommonSpan>{battle.defender_king}</King>
						<Commander><CommonSpan>Commander: </CommonSpan>{battle.defender_commander}</Commander>
					</RightWrapper>
				</Wrapper>
				<Winner><Winnerspan>Winner: </Winnerspan>{battle.attacker_outcome === 'win' ? battle.attacker_king: battle.defender_king}</Winner>
			</Container>
		)
	}
}

const Container = styled.div`
	width: 60%;
	margin: 2vw auto;
	padding: 2vw 0;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	
	$:hover{
	   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	
	@media (max-width: 768px) {
    width: 90%;
  }
`;

const Name= styled.h2`
	margin: 0;
	padding: 0;
	font-family: Lato, sans-serif;
	font-size: 26px;
	font-weight: 900;
	
`;


const CommonP = styled.p`
	margin: 5px 0;
	padding: 0;
	font-family: Lato, sans-serif;
	font-size: 14px;
	font-weight: 500;
	
`;

const CommonSpan =styled.span`
	padding: 0;
	font-family: Lato, sans-serif;
	font-size: 15px;
	font-weight: 700;
`;

const Winnerspan = styled(CommonSpan)`
	  font-size: 24px;
		font-weight: 700;
		margin-top: 25px;
`

const Attacker = styled(CommonP)`
		font-size: 20px;
		font-weight: 700;
`;

const Defender = styled(CommonP)`
		font-size: 20px;
		font-weight: 700;

`;


const Year = styled(CommonP)`

`;

const Location = styled(CommonP)`
	
`;

const BattleType = styled(CommonP)`
	
`;

const ArmySize = styled(CommonP)`

`;

const King = styled(CommonP)`
	
`;

const Commander = styled(CommonP)`
	
`;

const Winner = styled(CommonP)`
		font-size: 24px;
		font-weight: 700;
		margin-top: 25px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
	justify-content: center;
`;

const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
	justify-content: center;
`;






BattleCard.propTypes = {

	name: PropTypes.string,
	year: PropTypes.number,
	battle_number: PropTypes.number,
	attacker_king: PropTypes.string,
	defender_king: PropTypes.string,
	attacker_1: PropTypes.string,
	attacker_2: PropTypes.string,
	attacker_3: PropTypes.string,
	attacker_4: PropTypes.string,
	defender_1: PropTypes.string,
	defender_2: PropTypes.string,
	defender_4: PropTypes.string,
	attacker_outcome: PropTypes.string,
	battle_type: PropTypes.string,
	major_death: PropTypes.number,
	major_capture: PropTypes.number,
	attacker_size: PropTypes.number,
	defender_size: PropTypes.number,
	attacker_commander: PropTypes.string,
	defender_commander: PropTypes.string,
	summer: PropTypes.number,
	location: PropTypes.string,
	region: PropTypes.string,
	note: PropTypes.string
};

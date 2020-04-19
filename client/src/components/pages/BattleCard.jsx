import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default class BattleCard extends Component {
	render() {
		const {battle} = this.props;
		return (
			<Container>
				<Name>{battle.name}</Name>
				<Year>{battle.year}</Year>
				<Location>{`${battle.location}, ${battle.region}`}</Location>
				<BattleType>{battle.battle_type}</BattleType>
				<Wrapper>
					<LeftWrapper>
						<ArmySize>{battle.attacker_size}</ArmySize>
						<King>{battle.attacker_king}</King>
						<Commander>{battle.attacker_commander}</Commander>
					</LeftWrapper>
					<RightWrapper>
						<ArmySize>{battle.defender_size}</ArmySize>
						<King>{battle.defender_king}</King>
						<Commander>{battle.defender_commander}</Commander>
					</RightWrapper>
				</Wrapper>
				<Winner>{battle.attacker_outcome === 'win' ? battle.attacker_king: battle.defender_king}</Winner>
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
`;

const Name= styled.h2`
	
`;

const CommonP = styled.p`
	margin: 0;
	padding: 0;
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
	
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	justify-content: center;
`;

const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
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

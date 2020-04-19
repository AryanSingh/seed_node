import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchBattles} from "../../actions";
import api from '../../api'

export class Battles extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="Countries">
        <h2>List of locations</h2>
        {this.props.battles.map(battle => (
          <li key={battle}>{battle}</li>
        ))}
      </div>
    )
  }
  componentDidMount() {
    this.props.fetchBattles();
  }
}
const mapDispatchToProps = dispatch => {
	return {
		fetchBattles: () => dispatch(fetchBattles())
	}
};


const mapStateToProps = state => {
  return {
  	battles: state.battles
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Battles);

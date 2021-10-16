import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
function SecondCounter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div>{props.digitFour % 10}</div>
			<div>{props.digitThree % 10}</div>
			<div>{props.digitTwo % 10}</div>
			<div>{props.digitOne % 10}</div>
		</div>
	);
}

SecondCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

export default SecondCounter;

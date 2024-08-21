import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from 'react95';
import segments from "../data/segments";
import easyModeSegments from "../data/easyModeSegments";
import superEasyModeSegments from "../data/superEasyModeSegments";
import '../styles/Wheel.css';
import PropTypes from 'prop-types';

const WheelComponent = ({ setResult, easyMode, superEasyMode }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const currentSegments = superEasyMode ? superEasyModeSegments : (easyMode ? easyModeSegments : segments);
    const newPrizeNumber = Math.floor(Math.random() * currentSegments.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    const currentSegments = superEasyMode ? superEasyModeSegments : (easyMode ? easyModeSegments : segments);
    setResult(currentSegments[prizeNumber].option);
  };

  return (
    <div className="wheel-container">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={superEasyMode ? superEasyModeSegments : (easyMode ? easyModeSegments : segments)}
        textColors={["#FFFFFF"]}
        fontSize={12}
        fontFamily="'ms_sans_serif'"
        outerBorderColor={"#404040"}
        outerBorderWidth={8}
        innerRadius={10}
        innerBorderWidth={0}
        radiusLineColor={"#FFFFFF"}
        radiusLineWidth={2}
        perpendicularText={false}
        textDistance={65}
        onStopSpinning={handleStopSpinning}
      />
      <Button onClick={handleSpinClick} disabled={mustSpin} className="spin-button">
        May luck decide your fate!
      </Button>
    </div>
  );
};

// Prop Validation
WheelComponent.propTypes = {
  setResult: PropTypes.func.isRequired,
  easyMode: PropTypes.bool,
  superEasyMode: PropTypes.bool
}

export default WheelComponent;
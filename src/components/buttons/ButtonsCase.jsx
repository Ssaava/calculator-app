import BigButton from "./BigButton";
import Button from "./SmallButton";
import PropTypes from "prop-types";
export default function ButtonsCase({ handleClick }) {
  return (
    <>
      <div className="button-case">
        <Button num={7} onClick={() => handleClick(7)} />
        <Button num={8} onClick={() => handleClick(8)} />
        <Button num={9} onClick={() => handleClick(9)} />
        <Button
          num="DEL"
          classname="special-key"
          onClick={() => handleClick("DEL")}
        />
        <Button num={4} onClick={() => handleClick(4)} />
        <Button num={5} onClick={() => handleClick(5)} />
        <Button num={6} onClick={() => handleClick(6)} />
        <Button num="+" onClick={() => handleClick("+")} />
        <Button num={1} onClick={() => handleClick(1)} />
        <Button num={2} onClick={() => handleClick(2)} />
        <Button num={3} onClick={() => handleClick(3)} />
        <Button num="-" onClick={() => handleClick("-")} />
        <Button num="." onClick={() => handleClick(".")} />
        <Button num={0} onClick={() => handleClick(0)} />
        <Button num="/" onClick={() => handleClick("/")} />
        <Button num="X" onClick={() => handleClick("*")} />
        <BigButton num="RESET" onClick={() => handleClick("RESET")} />
        <BigButton
          num="="
          specialKey="equals-key"
          onClick={() => handleClick("equals")}
        />
      </div>
    </>
  );
}
ButtonsCase.propTypes = {
  setValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleClick: PropTypes.func,
};

import Button from "./buttons/Button";
export default function ButtonsCase() {
  return (
    <>
      <div className="button-case">
        <Button num={7} />
        <Button num={8} />
        <Button num={9} />
        <Button num="DEL" />
        <Button num={4} />
        <Button num={5} />
        <Button num={6} />
        <Button num="+" />
        <Button num={1} />
        <Button num={2} />
        <Button num={3} />
        <Button num="-" />
        <Button num="." />
        <Button num={0} />
        <Button num="/" />
        <Button num="X" />
      </div>
    </>
  );
}

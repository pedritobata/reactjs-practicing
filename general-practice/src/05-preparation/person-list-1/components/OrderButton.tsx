interface Props {
  isAsc: boolean;
  onAsc: Function;
  onDesc: Function;
}

const OrderButton = ({ isAsc, onAsc, onDesc }: Props): JSX.Element => {
  const onClickhandler = () => {
    if (isAsc) onDesc();
    else onAsc();
  };

  return (
    <button type="button" onClick={onClickhandler}>
      Toggle order <strong>{isAsc ? "A - Z" : "Z - A"}</strong>
    </button>
  );
};

export default OrderButton;

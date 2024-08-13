import "./styles.scss";

interface Props {
  color: string;
}

const Color = ({ color }: Props) => {
  return <div className="Color" style={{ backgroundColor: color }}></div>;
};

export default Color;

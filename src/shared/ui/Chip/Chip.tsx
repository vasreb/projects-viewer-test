import cn from "classnames";
import "./styles.scss";

interface Props {
  label: string;
  className?: string;
}

const Chip = ({ label, className }: Props) => {
  return <div className={cn(className, "Chip")}>{label}</div>;
};

export default Chip;

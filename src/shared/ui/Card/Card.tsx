import cn from "classnames";
import "./styles.scss";
import CardBottom from "./CardBottom";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ className, children }: Props) => {
  return <div className={cn(className, "Card")}>{children}</div>;
};

Card.Bottom = CardBottom;
Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;

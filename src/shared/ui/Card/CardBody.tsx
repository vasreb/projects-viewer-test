interface Props {
  children: React.ReactNode;
}

const CardBody = ({ children }: Props) => {
  return <div className="CardBody">{children}</div>;
};

export default CardBody;

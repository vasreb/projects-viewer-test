interface Props {
  children: React.ReactNode;
}

const CardHeader = ({ children }: Props) => {
  return <div className="CardHeader">{children}</div>;
};

export default CardHeader;

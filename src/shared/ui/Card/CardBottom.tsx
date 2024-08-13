interface Props {
  children: React.ReactNode;
}

const CardBottom = ({ children }: Props) => {
  return <div className="CardBottom">{children}</div>;
};

export default CardBottom;

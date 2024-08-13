import "./styles.scss";

interface Props {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: Props) => {
  return <img src={src} alt={alt} className="Avatar"></img>;
};

export default Avatar;

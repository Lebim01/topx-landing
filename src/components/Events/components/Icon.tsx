type IconProps = {
  src: string;
  alt: string;
};

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return (
    <div className='w-28'>
      <img src={src} alt={alt} className='w-full my-7' />
    </div>
  );
};
export default Icon;

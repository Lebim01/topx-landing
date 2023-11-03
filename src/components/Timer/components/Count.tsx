type Props = {
  value: string | number;
  label: string;
};

const Count: React.FC<Props> = ({ value, label }) => {
  return (
    <div className='flex flex-col items-center'>
      <span className='text-black font-medium text-2xl md:text-6xl md:font-bold md:pt-10'>
        {value}
      </span>
      <span className='text-black uppercase'>{label}</span>
    </div>
  );
};
export default Count;

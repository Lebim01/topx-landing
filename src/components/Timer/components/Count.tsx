type Props = {
  value: string | number;
  label: string;
};

const Count: React.FC<Props> = ({ value, label }) => {
  return (
    <div className='flex flex-col items-center'>
      <span className='text-blue-600 font-bold text-2xl'>{value}</span>
      <span className='text-blue-600 uppercase'>{label}</span>
    </div>
  );
};
export default Count;

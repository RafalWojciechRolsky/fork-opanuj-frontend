import { FC } from 'react';

interface IPropsTypes {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  id: string;
  value?: string;
}

const InputForm: FC<IPropsTypes> = ({ handleChange, type, id, value }) => {
  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {id.charAt(0).toUpperCase() + id.slice(1)}:
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </>
  );
};

export default InputForm;

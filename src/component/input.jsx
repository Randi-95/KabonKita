import { forwardRef } from "react";


const Input = forwardRef(({ nama, type }) => {
    return (
      <div className="relative">
        <input
          type={type}
          placeholder=" "
          className="mt-4 peer block w-full rounded-md px-3 pt-5 pb-4 text-sm font-medium outline-none transition-all  bg-green-900"
          required
        />
        <label
          className="absolute left-3 top-2 text-gray-500 text-xs font-medium transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs"
        >
          {nama}
        </label>
      </div>
    );
  });

export default Input
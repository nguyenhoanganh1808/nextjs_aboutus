interface InputProps {
  id: string;
  label: string;
  type: string;
}

export default function Input({ id, label, type }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={id}
      className="lg:py-5 lg:px-8 p-3 bg-white lg:rounded-[30px] rounded-lg shadow text-black placeholder:text-black"
      placeholder={label}
    />
  );
}

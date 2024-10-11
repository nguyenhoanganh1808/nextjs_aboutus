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
      className="py-5 px-8 bg-white rounded-[30px] shadow text-black placeholder:text-black"
      placeholder={label}
    />
  );
}

export default function Button({ children, onClick = () => {} }) {
  return (
    <button className="pl-6 pr-6 py-4 bg-white rounded-[200px] justify-center items-center inline-flex">
      <div className=" text-center text-[#1253e9] text-base font-medium  capitalize leading-normal tracking-wider">
        {children}
      </div>
    </button>
  );
}

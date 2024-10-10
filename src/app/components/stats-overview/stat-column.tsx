interface StatColumnProps {
  stat: string;
  title: string;
}

export default function StatColumn({ stat, title }: StatColumnProps) {
  return (
    <div className="flex flex-col gap-6 max-w-72">
      <p className="text-[80px] font-bold leading-[64px]">{stat}+</p>
      <p className="text-wrap text-xl font-bold leading-normal">{title}</p>
    </div>
  );
}

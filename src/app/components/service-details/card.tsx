interface CardProps {
  title: string;
  descriptionList: string[];
}

export default function Card({ title, descriptionList }: CardProps) {
  return (
    <div className="min-w-fit shadow-lg px-6 py-5 rounded-[10px] mb-4">
      <h2 className="text-gradient text-[27px] font-bold">{title}</h2>
      <ul className="list-disc px-6 py-5">
        {descriptionList.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  );
}

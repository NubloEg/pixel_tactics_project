import { HeroCardContainer } from "@/entities/ui/HeroCard/HeroCardContainer";

export default function HomePage() {
  return (
    <div className="flex gap-3 flex-wrap ">
      {Array(5)
        .fill(0)
        .map((el, index) => (
          <HeroCardContainer key={index} id={index} />
        ))}
    </div>
  );
}

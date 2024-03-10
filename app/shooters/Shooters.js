import { CardsList } from "../components/CardsList/CardsList";

export default async function Shooters() {
  // const shooter = getGamesByCategory("shooter");
  return (
    <main className="main-inner">
      <CardsList id="shooter" title="Шутеры" data={shooter} />
    </main>
  );
}

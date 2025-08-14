import { fetchPokemon } from "./actions/getPokemon";
import LoadPokemon from "@/components/LoadPokemon";
import SearchBox from "@/components/SearchBox";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) => {
  let { search } = await searchParams;
  search =
      typeof search === "string"
      ? search
      : undefined;

  const pokemon = await fetchPokemon({ search });
  return (
    <div className="max-w-[1500px] w-[95%] mx-auto">
      <SearchBox search={search} />
      <ul key={Math.random()}>
        <LoadPokemon
          search={search}
          initialPokemon={pokemon}
        />
      </ul>
    </div>
  );
};

export default Page;
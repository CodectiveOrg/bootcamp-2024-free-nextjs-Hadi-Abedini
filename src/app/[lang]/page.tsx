import { getDictionary } from "./dictionaries";
import { LanguageType } from "./dictionaries";

interface HomeProps {
  params: { lang: LanguageType };
}

export default async function Home({ params }: HomeProps) {
  const dict = await getDictionary(params.lang);
  return (
    <h1>{dict.title}</h1>
  );
}

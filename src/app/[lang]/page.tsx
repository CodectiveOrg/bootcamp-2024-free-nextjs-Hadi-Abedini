import styles from "./page.module.scss";
import { getDictionary } from "./dictionaries";
import { LanguageType } from "./dictionaries";

interface HomeProps {
  params: { lang: LanguageType };
}

export default async function Home({ params }: HomeProps) {
  const dict = await getDictionary(params.lang);

  return (
    <div className={styles.page}>
      <h1>{dict.title}</h1>
      <p>{dict.description}</p>
    </div>
  );
}

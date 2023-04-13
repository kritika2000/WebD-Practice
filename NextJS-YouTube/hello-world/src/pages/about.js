import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const { id, filter } = router.query;
  return (
    <h1>
      About Page {id} {filter}
    </h1>
  );
}

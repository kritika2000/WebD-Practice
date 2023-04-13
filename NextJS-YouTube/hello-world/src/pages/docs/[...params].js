import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  console.log(router.query);
  return <h1>Docs Home Page</h1>;
}

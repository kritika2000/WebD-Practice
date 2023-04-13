import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  console.log(router.isReady);
  const { productid, reviewid } = router.query;
  return <h1>{`Review about Product ${productid} ${reviewid}`}</h1>;
}

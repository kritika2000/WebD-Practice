import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const id = router.query.productid;
  return (
    <div>
      <h1>{`Details about Product ${id}`}</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

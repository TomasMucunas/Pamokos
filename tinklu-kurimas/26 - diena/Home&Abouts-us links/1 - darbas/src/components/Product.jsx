import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();

  return <h1>Product ID: {id}</h1>;
}

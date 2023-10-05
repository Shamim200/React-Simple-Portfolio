import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <div className="text-center my-5">
      <Spinner animation="border" />
    </div>
  );
}

import { previewData } from "next/headers";

export default function () {
  if (previewData()) {
    return <div>Preview mode</div>;
  }
  return (
    <div>
      <h1>Not in Preview mode</h1>
    </div>
  );
}

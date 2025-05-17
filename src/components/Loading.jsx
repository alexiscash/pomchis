import { FadeLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="loading">
      <FadeLoader color="white" height={25} width={5} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
}

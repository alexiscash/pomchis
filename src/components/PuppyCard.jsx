export default function PuppyCard({ name, desc, img, sex }) {
  return (
    <div className="puppy-card">
      <img src={img} alt={name} />
      <p>
        <strong>
          {name} ({sex})
        </strong>
      </p>
      <p className="description">{desc}</p>
    </div>
  );
}

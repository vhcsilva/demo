export default function BountyDescription({ description }) {
  return (
    <div className="content-wrapper mb-3">
      <h3 className="caption-large mb-3">Description</h3>
      <div className="bg-dark-gray p-3 rounded">
        <div className="p p-1">
          {description}
        </div>
      </div>
    </div>
  );
}
import React from "react";

import DragAndDrop from "./DragAndDrop";

export default function CreateBountyDetails({
  review
}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 m-0">
          <div className="form-group">
            <label className="caption-small mb-2">
             Title
            </label>
            <input
              type="text"
              className="form-control rounded-lg"
              placeholder="Your bounty title"
              disabled={review}
              value="Build a New Feature"
            />
            {!review && (
              <p className="p-small text-gray trans mt-2">
                Tip: Try to be as descriptive as possible
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="caption-small mb-2">
          Description
        </label>
        <textarea
          className="form-control"
          rows={3}
          placeholder="Type a Description"
          value="Build this feature using the best technologies"
          disabled={review}
        />
      </div>
      <div className="mb-4">
        <DragAndDrop
          review={review}
        />
      </div>
    </div>
  );
}

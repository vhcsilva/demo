export default function BountyComments({ comments = [], repo, issueId }) {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="content-wrapper">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="caption-large mb-0">
                Comments
              </h3>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
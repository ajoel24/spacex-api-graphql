import React from 'react';
import Moment from 'react-moment';

const LaunchItem = (props) => {
  const { mission_name, launch_date_local, launch_success } = props;

  return (
    <div className={`card card-body mb-3`}>
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{' '}
            <span className={launch_success ? 'text-success' : 'text-danger'}>
              {mission_name}
            </span>
          </h4>
          <p>
            Date:{' '}
            <Moment format="DD-MM-YYYY, HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          <button className={`btn btn-secondary`}>Launch Details</button>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;

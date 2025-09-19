import React from 'react';
import './UserCard.css'; // We'll add this CSS file in the next step

const UserCard = ({ user }) => {
  const { name, email, phone, website, company, address, username } = user;
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

  return (
    <div className="col-12 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex align-items-center p-3">
          <div className="avatar-container flex-shrink-0 mr-4">
            <img
              src={avatarUrl}
              alt={`${username}'s avatar`}
              className="img-fluid"
            />
            {/* <div className="outdated-warning mt-2">
              <p className="mb-0">You are using an</p>
              <p className="mb-0">outdated API endpoint.</p>
              <small>Documentation</small>
            </div> */}
          </div>
          <div className="user-details flex-grow-1">
            <h4 className="mb-1">{name}</h4>
            <div className="detail-item mb-1">
              <i className="fas fa-envelope mr-2"></i>
              <span>Email: </span>{email}
            </div>
            <div className="detail-item mb-1">
              <i className="fas fa-phone mr-2"></i>
              <span>Phone: </span>{phone}
            </div>
            <div className="detail-item mb-1">
              <i className="fas fa-building mr-2"></i>
              <span>Company: </span>{company.name}
            </div>
            <div className="detail-item mb-1">
              <i className="fas fa-globe mr-2"></i>
              <span>Website: </span>{website}
            </div>
            <div className="detail-item">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>Address: </span>
              {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
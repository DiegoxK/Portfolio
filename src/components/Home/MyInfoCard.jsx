function MyInfoCard() {
  return (
    <section className="info-card">
      <div className="profile-container">
        <img
          src="/assets/PerfilImage.jpg"
          alt="profile picture"
          className="profile-picture"
        />
        <div className="contacts">
          <a href="#">
            <img src="/assets/social media/github.svg" alt="" />
          </a>
          <a href="#">
            <img src="/assets/social media/linkedin.svg" alt="" />
          </a>
          <a href="#">
            <img src="/assets/social media/twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MyInfoCard;

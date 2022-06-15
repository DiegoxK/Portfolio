import { useEffect, useState } from "react";
import { getOne } from "../../../api/apiCalls";

function MyInfoCard() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getOne("profile", "62a4b580b33c8af1cdc0a98b").then((res) => {
      setProfile(res);
    });
  }, []);

  return (
    <section className="info-card">
      <div className="profile-container">
        <img
          src={profile.img}
          alt="profile picture"
          className="profile-picture"
        />

        <p>{profile.description}</p>
        <div className="contacts">
          <a href={profile.gitUrl}>
            <img src="/assets/social media/github.svg" alt="github" />
          </a>
          <a href={profile.linkeinUrl}>
            <img src="/assets/social media/linkedin.svg" alt="linkedin" />
          </a>
          <a href={profile.twitterUrl}>
            <img src="/assets/social media/twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MyInfoCard;

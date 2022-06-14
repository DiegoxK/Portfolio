import { useEffect, useState } from "react";
import { getOne, editData } from "../../../api/apiCalls";

function MyInfoCardEdit() {
  const [profile, setProfile] = useState();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    getOne("profile").then((res) => {
      setProfile(res);
    });
  }, []);

  const onChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const editProfile = (event) => {
    event.preventDefault();
    editData("profile", profile._id, profile).then((res) => {
      setAlert(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  };

  return (
    <section className="info-card">
      {profile ? (
        <div className="profile-container">
          <form onSubmit={editProfile}>
            <textarea
              onChange={onChange}
              placeholder="Profile image"
              value={profile.img}
              name="img"
              cols="30"
              rows="10"
            ></textarea>

            <input
              onChange={onChange}
              placeholder="Profile description"
              type="text"
              name="description"
              value={profile.description}
            />

            <input
              onChange={onChange}
              placeholder="GitHub Link"
              type="text"
              name="gitUrl"
              value={profile.gitUrl}
            />
            <input
              onChange={onChange}
              placeholder="Linkedin Link"
              type="text"
              name="linkeinUrl"
              value={profile.linkeinUrl}
            />
            <input
              onChange={onChange}
              placeholder="Twitter Link"
              type="text"
              name="twitterUrl"
              value={profile.twitterUrl}
            />
            <button type="submit">Editar</button>
          </form>
          <div>
            {alert ? (
              <p style={{ color: "green" }} className="edit-alert">
                Editado con exito
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </section>
  );
}

export default MyInfoCardEdit;

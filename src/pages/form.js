import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    name: " ",
    about: " ",
    knownTech: {},
    appsBuild: [],
    education: [],
    experience: [],
    email: "",
    phoneNumber: "",
    linkedInId: "",
    githubId: "",
  });

  const [appCount, setAppCount] = useState(1);

  const handleAddMore = (e) => {
    e.preventDefault();
    setAppCount(appCount + 1);
  };

  const [prevExperience, setPrevExperience] = useState({});

  const handlePrevExperience = (e) => {
    setPrevExperience((prevExperience) => ({
      ...prevExperience,
      [e.target.name]: e.target.value,
    }));
  };

  const [app1Detail, setApp1Detail] = useState({});
  const [app2Detail, setApp2Detail] = useState({});
  const [app3Detail, setApp3Detail] = useState({});
  const [app4Detail, setApp4Detail] = useState({});

  const handleApp1Detail = (e) => {
    setApp1Detail((app1Detail) => ({
      ...app1Detail,
      [e.target.name]: e.target.value,
    }));
  };

  const handleApp2Detail = (e) => {
    setApp2Detail((app2Detail) => ({
      ...app2Detail,
      [e.target.name]: e.target.value,
    }));
  };

  const handleApp3Detail = (e) => {
    setApp3Detail((app3Detail) => ({
      ...app3Detail,
      [e.target.name]: e.target.value,
    }));
  };

  const handleApp4Detail = (e) => {
    setApp4Detail((app4Detail) => ({
      ...app4Detail,
      [e.target.name]: e.target.value,
    }));
  };

  const [postgradDetail, setPostgradDetail] = useState({});
  const [gradDetail, setGradDetail] = useState({});
  const [highSchoolDetail, setHighSchoolDetail] = useState({});

  const handlePostgradDetail = (e) => {
    setPostgradDetail((postgradDetail) => ({
      ...postgradDetail,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGradDetail = (e) => {
    setGradDetail((gradDetail) => ({
      ...gradDetail,
      [e.target.name]: e.target.value,
    }));
  };

  const handleHighSchoolDetail = (e) => {
    setHighSchoolDetail((highSchoolDetail) => ({
      ...highSchoolDetail,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTechChange = (e) => {
    setData((data) => ({
      ...data,
      knownTech: { ...data.knownTech, [e.target.name]: e.target.value },
    }));
  };

  const handleAppChange = (e) => {
    e.preventDefault();
    const newArr = [...data.appsBuild];
    newArr.push(app1Detail, app2Detail, app3Detail);

    setData((data) => ({
      ...data,
      appsBuild: newArr,
    }));
  };

  //onclick...........

  const handleEducationChange = (e) => {
    e.preventDefault();
    const newArr = [...data.education];
    newArr.push(postgradDetail, gradDetail, highSchoolDetail);

    setData((data) => ({
      ...data,
      education: newArr,
    }));
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        return setData((data) => ({
          ...data,
          name: e.target.value,
        }));
      case "about":
        return setData((data) => ({
          ...data,
          about: e.target.value,
        }));
      case "email":
        return setData((data) => ({
          ...data,
          email: e.target.value,
        }));
      case "phonenumber":
        return setData((data) => ({
          ...data,
          phoneNumber: e.target.value,
        }));
      case "linkedin":
        return setData((data) => ({
          ...data,
          linkedInId: e.target.value,
        }));
      case "github":
        return setData((data) => ({
          ...data,
          githubId: e.target.value,
        }));
    }
  };
  const handleExperience = (e) => {
    e.preventDefault();
    const newArr = [...data.experience];
    newArr.push(prevExperience);

    setData((data) => ({
      ...data,
      experience: newArr,
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    navigate("/", { state: data });
  };

  return (
    <div className="form">
      <div className="form__container">
        <h1 className="form__h1">Welcome to Porto-Forge</h1>
        <p>An online automatic PORTFOLIO builder</p>
        <form onSubmit={onFormSubmit}>
          <div className="form__introduction">
            <h1 className="form__h1">Introduction</h1>
            <label>
              Name :
              <input
                name="name"
                type="text"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label>
              About You :
              <textarea
                name="about"
                type="text"
                rows="8"
                cols="50"
                onChange={(e) => handleChange(e)}
              ></textarea>
            </label>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />

          <div className="form__know__technologies">
            <h1 className="form__h1">Know Technologies</h1>
            <div className="form__know__technologies__container">
              <div className="col-1">
                <input
                  name="tech1"
                  type="text"
                  placeholder="Ex: HTML5"
                  onChange={(e) => handleTechChange(e)}
                  className="tech"
                />

                <input
                  name="tech2"
                  type="text"
                  placeholder="Ex: CSS3"
                  onChange={(e) => handleTechChange(e)}
                  className="tech"
                />
                <input
                  name="tech3"
                  type="text"
                  placeholder="Ex: React"
                  onChange={(e) => handleTechChange(e)}
                />

                <input
                  name="tech4"
                  type="text"
                  placeholder="Ex: Java"
                  onChange={(e) => handleTechChange(e)}
                />
              </div>
              <div className="col-2">
                <input
                  name="tech5"
                  type="text"
                  placeholder="Ex: Python"
                  onChange={(e) => handleTechChange(e)}
                />

                <input
                  name="tech6"
                  type="text"
                  placeholder="Ex: React Native"
                  onChange={(e) => handleTechChange(e)}
                />
                <input
                  name="tech7"
                  type="text"
                  placeholder="Ex: Django"
                  onChange={(e) => handleTechChange(e)}
                />

                <input
                  name="tech8"
                  type="text"
                  placeholder="Ex: JavaScript"
                  onChange={(e) => handleTechChange(e)}
                />
              </div>
            </div>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />

          <div className="form__app__build">
            <h1 className="form__h1">Applications Build</h1>
            <div className="form__app__build__container">
              <h2>App number 1</h2>
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input
                    name="appname"
                    type="text"
                    onChange={(e) => handleApp1Detail(e)}
                  />
                </label>
                <label>
                  Link :
                  <input
                    name="link"
                    type="text"
                    onChange={(e) => handleApp1Detail(e)}
                  />
                </label>
              </div>

              <label>
                Description :
                <textarea
                  name="description"
                  type="text"
                  rows="8"
                  cols="50"
                  onChange={(e) => handleApp1Detail(e)}
                ></textarea>
              </label>
            </div>

            <div className="form__app__build__container">
              <h2>App number 2</h2>
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input
                    name="appname"
                    type="text"
                    onChange={(e) => handleApp2Detail(e)}
                  />
                </label>
                <label>
                  Link :
                  <input
                    name="link"
                    type="text"
                    onChange={(e) => handleApp2Detail(e)}
                  />
                </label>
              </div>

              <label>
                Description :
                <textarea
                  name="description"
                  type="text"
                  rows="8"
                  cols="50"
                  onChange={(e) => handleApp2Detail(e)}
                ></textarea>
              </label>
            </div>

            <div className="form__app__build__container">
              <h2>App number 3</h2>
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input
                    name="appname"
                    type="text"
                    onChange={(e) => handleApp3Detail(e)}
                  />
                </label>
                <label>
                  Link :
                  <input
                    name="link"
                    type="text"
                    onChange={(e) => handleApp3Detail(e)}
                  />
                </label>
              </div>

              <label>
                Description :
                <textarea
                  name="description"
                  type="text"
                  rows="8"
                  cols="50"
                  onChange={(e) => handleApp3Detail(e)}
                ></textarea>
              </label>
            </div>

            <div className="form__app__build__container">
              <h2>App number 4</h2>
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input
                    name="appname"
                    type="text"
                    onChange={(e) => handleApp4Detail(e)}
                  />
                </label>
                <label>
                  Link :
                  <input
                    name="link"
                    type="text"
                    onChange={(e) => handleApp4Detail(e)}
                  />
                </label>
              </div>

              <label>
                Description :
                <textarea
                  name="description"
                  type="text"
                  rows="8"
                  cols="50"
                  onChange={(e) => handleApp4Detail(e)}
                ></textarea>
              </label>
            </div>
            <button
              onClick={handleAppChange}
              style={{
                width: "200px",
                height: "50px",
                backgroundColor: "Highlight",
                fontSize: "18px",
                fontWeight: "600",
                margin: "0 auto",
                marginBottom: "20px",
                cursor: "pointer",
                border: "2px solid skyblue",
                borderRadius: "20px",
                zIndex: 3,
              }}
            >
              Save App Build
            </button>
          </div>

          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />

          <div className="form__contact__me">
            <h1 className="form__h1"> Contact Information</h1>
            <div>
              <label className="form__contact__me__label">E-mail :</label>
              <input
                name="email"
                type="text"
                className="form__contact__me__input"
                onChange={(e) => handleChange(e)}
              />

              <label className="form__contact__me__label">Phone Number:</label>
              <input
                name="phonenumber"
                type="text"
                className="form__contact__me__input"
                onChange={(e) => handleChange(e)}
              />

              <label className="form__contact__me__label">LinkedIn :</label>
              <input
                name="linkedin"
                type="text"
                className="form__contact__me__input"
                onChange={(e) => handleChange(e)}
              />

              <label className="form__contact__me__label">Github :</label>
              <input
                name="github"
                type="text"
                className="form__contact__me__input"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />
          <div className="form__education">
            <h1 className="form__h1">Educational Details</h1>
            <div className="form__app__build__container">
              <h2>Post Graduation Details</h2>
              <div style={{ display: "flex" }}>
                <label>
                  Name of College :
                  <input
                    name="name"
                    type="text"
                    onChange={(e) => handlePostgradDetail(e)}
                  />
                </label>
                <label>
                  Year of passing :
                  <input
                    name="yearofpassing"
                    type="text"
                    onChange={(e) => handlePostgradDetail(e)}
                  />
                </label>
              </div>

              <label>
                About your study :
                <textarea
                  name="moredetail"
                  type="text"
                  rows="8"
                  cols="50"
                  onChange={(e) => handlePostgradDetail(e)}
                ></textarea>
              </label>
            </div>

            <div className="form__app__build__container">
              <h2>Graduation Details</h2>
              <div style={{ display: "flex" }}>
                <label>
                  Name of College:
                  <input
                    name="name"
                    type="text"
                    onChange={(e) => handleGradDetail(e)}
                  />
                </label>
                <label>
                  Year of passing :
                  <input
                    name="yearofpassing"
                    type="text"
                    onChange={(e) => handleGradDetail(e)}
                  />
                </label>
              </div>

              <label>
                About your study :
                <textarea
                  name="moredetail"
                  type="text"
                  rows="8"
                  cols="50"
                  onChange={(e) => handleGradDetail(e)}
                ></textarea>
              </label>
            </div>
            <div className="form__app__build__container">
              <h2>High School Details :</h2>
              <div style={{ display: "flex" }}>
                <label>
                  Name of School :
                  <input
                    name="name"
                    type="text"
                    onChange={(e) => handleHighSchoolDetail(e)}
                  />
                </label>
                <label>
                  Year of passing :
                  <input
                    name="yearofpassing"
                    type="text"
                    onChange={(e) => handleHighSchoolDetail(e)}
                  />
                </label>
              </div>

              <label>
                About your study :
                <textarea
                  name="moredetail"
                  type="text"
                  rows="8"
                  cols="50"
                  onChange={(e) => handleHighSchoolDetail(e)}
                ></textarea>
              </label>
            </div>
            <button
              onClick={handleEducationChange}
              style={{
                width: "220px",
                height: "50px",
                padding: "10px",
                backgroundColor: "Highlight",
                fontSize: "16px",
                fontWeight: "600",
                margin: "0 auto",
                marginBottom: "20px",
                cursor: "pointer",
                border: "2px solid skyblue",
                borderRadius: "20px",
                zIndex: 3,
              }}
            >
              Save Education Details
            </button>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />

          <div className="form__companies__workedwith">
            <h1 className="form__h1">Previous Experience</h1>
            <div className="form__companies__workedwith__container">
              <label className="form__companies__workedwith__container__label">
                Company Name :
              </label>
              <input
                name="name"
                type="text"
                className="form__companies__workedwith__container__input"
                onChange={(e) => handlePrevExperience(e)}
              />

              <label className="form__companies__workedwith__container__label">
                Designation :
              </label>
              <input
                name="designation"
                type="text"
                className="form__companies__workedwith__container__input"
                onChange={(e) => handlePrevExperience(e)}
              />

              <label className="form__companies__workedwith__container__label">
                Duration worked :
              </label>
              <input
                name="durationworked"
                type="text"
                className="form__companies__workedwith__container__input"
                onChange={(e) => handlePrevExperience(e)}
              />

              <label className="form__companies__workedwith__container__label">
                Work Did :
              </label>
              <input
                name="typeofwork"
                type="text"
                className="form__companies__workedwith__container__input"
                onChange={(e) => handlePrevExperience(e)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              margin: "20px",
              padding: "20px",
            }}
          >
            <button
              onClick={handleExperience}
              style={{
                width: "220px",
                height: "50px",
                padding: "10px",
                backgroundColor: "Highlight",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                border: "2px solid skyblue",
                borderRadius: "20px",
                zIndex: 3,
              }}
            >
              Save Work Details
            </button>
          </div>

          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />
          <div className="form__submit__btn__container">
            <input
              type="submit"
              value="Create Portfolio"
              className="form__submit__btn"
            />
            <button
              className="form__submit__btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Navigate to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

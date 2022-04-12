import React from "react";
import "./form.css";

const Form = () => {
  const onFormSubmit = () => {
    console.log("submit button clicked");
  };
  return (
    <div className="form">
      <div className="form__container">
        <h1>Welcome to Porto-Forge</h1>
        <p>An online automatic PORTFOLIO builder</p>
        <form onSubmit={onFormSubmit}>
          <div className="form__introduction">
            <h1>Introduction</h1>
            <label>
              Name :
              <input name="name" type="text" />
            </label>
            <label>
              About You :
              <textarea name="name" type="text" rows="8" cols="50"></textarea>
            </label>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />

          <div className="form__know__technologies">
            <h1>Know Technologies</h1>
            <div className="form__know__technologies__container">
              <div className="col-1">
                <input name="name" type="text" placeholder="Ex: HTML5" />

                <input name="name" type="text" placeholder="Ex: CSS3" />
                <input name="name" type="text" placeholder="Ex: React" />

                <input name="name" type="text" placeholder="Ex: Java" />
              </div>
              <div className="col-2">
                <input name="name" type="text" placeholder="Ex: Python" />

                <input name="name" type="text" placeholder="Ex: React Native" />
                <input name="name" type="text" placeholder="Ex: Django" />

                <input name="name" type="text" placeholder="Ex: JavaScript" />
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
            <h1>Applications Build</h1>
            <div className="form__app__build__container">
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input name="name" type="text" />
                </label>
                <label>
                  Year of passing :
                  <input name="name" type="text" />
                </label>
              </div>

              <label>
                Description :
                <textarea name="name" type="text" rows="8" cols="50"></textarea>
              </label>
            </div>

            <div className="form__app__build__container">
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input name="name" type="text" />
                </label>
                <label>
                  Year of passing :
                  <input name="name" type="text" />
                </label>
              </div>

              <label>
                Description :
                <textarea name="name" type="text" rows="8" cols="50"></textarea>
              </label>
            </div>

            <div className="form__app__build__container">
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input name="name" type="text" />
                </label>
                <label>
                  Year of passing :
                  <input name="name" type="text" />
                </label>
              </div>

              <label>
                Description :
                <textarea name="name" type="text" rows="8" cols="50"></textarea>
              </label>
            </div>

            <div className="form__app__build__container">
              <div style={{ display: "flex" }}>
                <label>
                  Name :
                  <input name="name" type="text" />
                </label>
                <label>
                  Year of passing :
                  <input name="name" type="text" />
                </label>
              </div>

              <label>
                Description :
                <textarea name="name" type="text" rows="8" cols="50"></textarea>
              </label>
            </div>
          </div>

          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />

          <div className="form__contact__me">
            <h1>Contact Information</h1>
            <label>
              E-mail :
              <input name="name" type="text" />
            </label>
            <label>
              Phone number :
              <input name="name" type="text" />
            </label>
            <label>
              LinkedIn :
              <input name="name" type="text" />
            </label>
            <label>
              Github :
              <input name="name" type="text" />
            </label>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />
          <div className="form__education">
            <h1>Educational Details</h1>
            <div className="form__app__build__container">
              <div style={{ display: "flex" }}>
                <label>
                  Name of College :
                  <input name="name" type="text" />
                </label>
                <label>
                  Year of passing :
                  <input name="name" type="text" />
                </label>
              </div>

              <label>
                About your study :
                <textarea name="name" type="text" rows="8" cols="50"></textarea>
              </label>
            </div>
            <div className="form__app__build__container">
              <div style={{ display: "flex" }}>
                <label>
                  Name of School:
                  <input name="name" type="text" />
                </label>
                <label>
                  Year of passing :
                  <input name="name" type="text" />
                </label>
              </div>

              <label>
                About your study :
                <textarea name="name" type="text" rows="8" cols="50"></textarea>
              </label>
            </div>
            <div className="form__app__build__container">
              <div style={{ display: "flex" }}>
                <label>
                  Name of School :
                  <input name="name" type="text" />
                </label>
                <label>
                  Year of passing :
                  <input name="name" type="text" />
                </label>
              </div>

              <label>
                About your study :
                <textarea name="name" type="text" rows="8" cols="50"></textarea>
              </label>
            </div>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />

          <div className="form__companies__workedwith">
            <h1>Previous Experience</h1>
            <div className="form__companies__workedwith__container">
              <label>
                Company Name :
                <input name="name" type="text" />
              </label>
              <label>
                Designation :
                <input name="name" type="text" />
              </label>
              <label>
                Duration worked :
                <input name="name" type="text" />
              </label>
              <label>
                Work Did :
                <input name="name" type="text" />
              </label>
            </div>
          </div>
          <hr
            style={{
              borderBottom: "1px wheat solid",
              marginBottom: "100px",
            }}
          />
          <input
            type="submit"
            name="submit"
            style={{
              backgroundColor: " green",
              width: "100px",
              height: "60px",
              color: "white",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;

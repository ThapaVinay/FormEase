import React, { useState } from "react";

const BasicLogistics = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false);
  };


  return (
    <div style={{ margin: "20px" }}>
      <div onClick={toggleDropdown}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            {isOpen ? (
              <i
                class="fa-solid fa-chevron-up"
                style={{ fontSize: "16px" }}
              ></i>
            ) : (
              <i
                class="fa-solid fa-chevron-down"
                style={{ fontSize: "16px" }}
              ></i>
            )}
          </div>

          <div
            style={{
              color: "black",
              fontSize: 24,
              fontFamily: "Open Sans",
              fontWeight: "300",
            }}
          >
            Basic Logistics
          </div>
        </div>
      </div>
      {isOpen && (
        <div style={{ padding: "10px", paddingLeft: "30px" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Open Sans",
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              Upload Cover Page (optional)
              <div style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                <label
                  for="file-input"
                  style={{
                    color: "black",
                    fontSize: 13,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                  }}
                >
                  Choose file here
                  <span style={{ paddingLeft: "10px" }}>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                  </span>
                </label>
                <input
                  id="file-input"
                  type="file"
                  name="file-name"
                  value={formData.field1}
                  onChange={handleChange}
                  hidden={true}
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* for the first form row */}
            <div style={{ display: "flex", paddingLeft: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="firmname"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Style of Cause
                </label>
                <input
                  type="text"
                  name="bookingname"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Type Here"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="bookingname"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Court File #
                </label>
                <input
                  type="text"
                  name="bookingname"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Type Here"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="phone"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Booking Dates
                </label>
                <div>
                  <input
                    type="date"
                    name="phone"
                    value={formData.field1}
                    onChange={handleChange}
                    style={{
                      width: "250px",
                      height: "27px",
                      borderRadius: "5px",
                      borderWidth: "1px",
                      padding: "10px",
                    }}
                    placeholder="Type Here"
            
                  />
                </div>
              </div>
            </div>

            {/* for the second form row */}
            <div style={{ display: "flex", paddingLeft: "20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="billing"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Billing Address
                </label>
                <input
                  type="text"
                  name="billing"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Type Here"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="postalcode"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Zip/Postal Code
                </label>
                <input
                  type="text"
                  name="postalcode"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Input"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="country"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Country/City
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Canada"
                />
              </div>
            </div>

            {/* for the third row of form */}
            <div style={{ display: "flex", paddingLeft: "180px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="role"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Role
                </label>
                <select
                  name="role"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "270px",
                    height: "49px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                >
                  <option value="role1">Role 1</option>
                  <option value="role2">Role 2</option>
                </select>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="postalcode"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Name of represented Client
                </label>
                <input
                  type="text"
                  name="postalcode"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                />
              </div>
            </div>

            {/* for the fourth row of form */}
            <div
              style={{
                display: "flex",
                paddingLeft: "180px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "30px",
                }}
              >
                <label
                  htmlFor="role"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Lead counsel(s) information
                </label>
                <input
                  type="text"
                  name="postalcode"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Name"
                />
              </div>
              <div style={{ paddingRight: "10px", fontWeight: "1000" }}>
                ...
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="postalcode"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                    paddingTop: "20px",
                  }}
                ></label>
                <input
                  type="text"
                  name="postalcode"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Email"
                />
              </div>
            </div>

            {/* for the fifth row of form */}
            <div
              style={{
                display: "flex",
                paddingLeft: "180px",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: "800", marginRight: "-10px" }}>+</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "30px",
                }}
              >
                <label
                  htmlFor="role"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                ></label>
                <input
                  type="text"
                  name="postalcode"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                  placeholder="Add Additional councel"
                />
              </div>
              <div style={{ paddingRight: "10px", fontWeight: "1000" }}>
                ...
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  paddingRight: "50px",
                }}
              >
                <label
                  htmlFor="postalcode"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                ></label>
                <input
                  type="text"
                  name="postalcode"
                  value={formData.field1}
                  onChange={handleChange}
                  style={{
                    width: "250px",
                    height: "27px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "10px",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BasicLogistics;

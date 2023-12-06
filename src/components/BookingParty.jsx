import React, { useState } from "react";
import { Switch, Space } from "antd";

const BookingParty = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(false);

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
            Booking Party Information
          </div>

          <div
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "Open Sans",
              fontWeight: "300",
              paddingLeft: "20px",
            }}
          >
            (Enter as much as possible)
          </div>
        </div>
      </div>
      {isOpen && (
        <div style={{ padding: "10px", paddingLeft: "30px" }}>
          <div
            style={{
              color: "black",
              fontSize: 16,
              fontFamily: "Open Sans",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Use information on account?
            <Space direction="horizontal" style={{ paddingLeft: "20px" }}>
              <Switch
                style={{
                  backgroundColor: currentValue ? "green" : "red",
                }}
                defaultChecked={false}
                checkedChildren="Yes"
                unCheckedChildren="No"
                onChange={(value) => {
                  setCurrentValue(value);
                }}
              />
            </Space>
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
                  Firm Name
                </label>
                <select
                  name="firmname"
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
                  <option value="firm1">Firm 1</option>
                  <option value="firm2">Firm 2</option>
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
                  htmlFor="bookingname"
                  style={{
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                    padding: "5px",
                  }}
                >
                  Booking Contant Name
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
                  Phone Number (No Spaces)
                </label>
                <input
                  type="text"
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

export default BookingParty;

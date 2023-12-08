import React, { useState } from "react";
import { Switch, Space } from "antd";

const CourtReporting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(true);

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
                style={{ fontSize: "14px" }}
              ></i>
            ) : (
              <i
                class="fa-solid fa-chevron-down"
                style={{ fontSize: "14px" }}
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
            Court Reporting
          </div>
        </div>
      </div>

      {isOpen && (
        <div style={{ padding: "40px", paddingLeft: "30px" }}>
          {/* for first option */}
          <div
            style={{
              color: "black",
              fontSize: 14,
              fontFamily: "Open Sans",
              fontWeight: "300",
              wordWrap: "break-word",
              display: "flex",
            }}
          >
            <div style={{ width: "230px" }}>
              Will this matter plan to have a Court Reporter?
            </div>
            <Space direction="horizontal" style={{ paddingLeft: "70px" }}>
              <Switch
                style={{
                  backgroundColor: currentValue ? "green" : "red",
                }}
                defaultChecked={true}
                checkedChildren="Yes"
                unCheckedChildren="No"
                onChange={(value) => {
                  setCurrentValue(value);
                }}
              />
            </Space>
          </div>

          {/* for second option */}
          <div
            style={{
              color: "black",
              fontSize: 14,
              fontFamily: "Open Sans",
              fontWeight: "300",
              wordWrap: "break-word",
              display: "flex",
              paddingTop: "50px",
            }}
          >
            <div style={{ width: "230px" }}>
              Would you like an Arbitration Place Court Reporter?
            </div>
            <Space direction="horizontal" style={{ paddingLeft: "70px" }}>
              <Switch
                style={{
                  backgroundColor: currentValue ? "green" : "red",
                }}
                defaultChecked={true}
                checkedChildren="Yes"
                unCheckedChildren="No"
                onChange={(value) => {
                  setCurrentValue(value);
                }}
              />
            </Space>
          </div>

          {/* for third option */}
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "40px",
              }}
            >
              <label
                htmlFor="firmname"
                style={{
                  fontSize: 14,
                  fontFamily: "Open Sans",
                  fontWeight: "300",
                  width: "230px",
                  paddingBottom: "10px",
                }}
              >
                Is there a specific Arbitration Place Court Reporter you prefer?
              </label>
              <div style={{ marginLeft: "-40px" }}>
                <i
                  class="fa-solid fa-circle-question"
                  style={{ fontSize: "20px", padding: "10px" }}
                ></i>
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
                    color: "gray",
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                  }}
                >
                  <option
                    value=""
                    disabled
                    selected
                    style={{ display: "none" }}
                  >
                    Select AP Court Reporter
                  </option>
                  <option value="firm1">Court 1</option>
                  <option value="firm2">Court 2</option>
                </select>
              </div>
            </div>

            {/* for fourth option */}
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Open Sans",
                fontWeight: "300",
                wordWrap: "break-word",
                display: "flex",
                paddingTop: "40px",
              }}
            >
              <div style={{ width: "230px" }}>
                Will a transcript be required?
              </div>
              <Space direction="horizontal" style={{ paddingLeft: "70px" }}>
                <Switch
                  style={{
                    backgroundColor: currentValue ? "green" : "red",
                  }}
                  defaultChecked={true}
                  checkedChildren="Yes"
                  unCheckedChildren="No"
                  onChange={(value) => {
                    setCurrentValue(value);
                  }}
                />
              </Space>
            </div>

            {/* fifth option */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "40px",
              }}
            >
              <label
                htmlFor="firmname"
                style={{
                  fontSize: 14,
                  fontFamily: "Open Sans",
                  fontWeight: "300",
                  width: "230px",
                  paddingBottom: "10px",
                }}
              >
                <div style={{ marginLeft: "-40px" }}>
                  <i
                    class="fa-solid fa-circle-question"
                    style={{ fontSize: "20px", padding: "10px" }}
                  ></i>
                  Turnaround time?
                </div>
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
                  fontSize: 14,
                  fontFamily: "Open Sans",
                  fontWeight: "300",
                }}
              >
                <option value="firm1">Standard</option>
                <option value="firm2">Court 2</option>
              </select>
            </div>

            {/* for sixth option */}
            <div
              style={{
                color: "black",
                fontSize: 14,
                fontFamily: "Open Sans",
                fontWeight: "300",
                wordWrap: "break-word",
                display: "flex",
                paddingTop: "40px",
              }}
            >
              <div style={{ width: "230px" }}>
                <div style={{ marginLeft: "-40px" }}>
                  <i
                    class="fa-solid fa-circle-question"
                    style={{ fontSize: "20px", padding: "10px" }}
                  ></i>
                  Multilingual?
                </div>
              </div>
              <Space direction="horizontal" style={{ paddingLeft: "70px" }}>
                <Switch
                  style={{
                    backgroundColor: currentValue ? "green" : "red",
                  }}
                  defaultChecked={true}
                  checkedChildren="Yes"
                  unCheckedChildren="No"
                  onChange={(value) => {
                    setCurrentValue(value);
                  }}
                />
              </Space>
            </div>

            {/* for seventh option */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "30px",
              }}
            >
              <label
                htmlFor="bookingname"
                style={{
                  fontSize: 14,
                  fontFamily: "Open Sans",
                  fontWeight: "300",
                  width: "290px",
                }}
              >
                Please list the non-english languages you would like
                accommodated (separate by comma)
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
                placeholder="Input"
              />
            </div>

            {/* eighth option */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "40px",
              }}
            >
              <label
                htmlFor="firmname"
                style={{
                  fontSize: 14,
                  fontFamily: "Open Sans",
                  fontWeight: "300",
                  width: "230px",
                  paddingBottom: "10px",
                }}
              >
                Daily Rough Draft?
              </label>
              <div style={{ marginLeft: "-40px" }}>
                <i
                  class="fa-solid fa-circle-question"
                  style={{ fontSize: "20px", padding: "10px" }}
                ></i>
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
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                  }}
                >
                  <option value="firm1">I don't know</option>
                  <option value="firm2">Court 2</option>
                </select>
              </div>
            </div>

            {/* ninth option */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "40px",
              }}
            >
              <label
                htmlFor="firmname"
                style={{
                  fontSize: 14,
                  fontFamily: "Open Sans",
                  fontWeight: "300",
                  width: "230px",
                  paddingBottom: "10px",
                }}
              >
                Realtime reporting?
              </label>
              <div style={{ marginLeft: "-40px" }}>
                <i
                  class="fa-solid fa-circle-question"
                  style={{ fontSize: "20px", padding: "10px" }}
                ></i>
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
                    fontSize: 14,
                    fontFamily: "Open Sans",
                    fontWeight: "300",
                  }}
                >
                  <option value="firm1">I don't know</option>
                  <option value="firm2">Court 2</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CourtReporting;

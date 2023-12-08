import React, { useState } from "react";
import { Switch, Space } from "antd";

const AdditionalFeatures = () => {
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
            Additional Features
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
            <div style={{ width: "230px" }}>Do you require interpretation?</div>
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
                Please list all languages to be interpreted (separate by comma)
              </label>
              <div style={{ marginLeft: "-40px" }}>
                <i
                  class="fa-solid fa-circle-question"
                  style={{ fontSize: "20px", padding: "10px" }}
                ></i>
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
            </div>

            {/* for third option */}
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
                  Do you require CART services?
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
                Will you need a quote prior to confirmation?
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
                  paddingBottom:"10px"
                }}
              >
                Please list any additional requests or considerations you might
                have at this time
              </label>
              <input
                type="text"
                name="bookingname"
                value={formData.field1}
                onChange={handleChange}
                style={{
                  width: "450px",
                  height: "27px",
                  borderRadius: "5px",
                  borderWidth: "1px",
                  padding: "10px",
                }}
                placeholder="Input"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdditionalFeatures;

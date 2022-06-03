import React, { useState } from "react";
import "antd/dist/antd.css";
import "./HomePage.scss";
import { Button, Checkbox, Divider, Select } from "antd";
import CheckboxComponent from "./CheckboxComponent";
import LogoImg from "../../Assets/111.svg";
import {ArrowLeftOutlined} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];


// Drop down data as array ofobjects

// let arrayOptions = [
//   { title: "React", id: "react" },
//   { title: "Angular", id: "angular" },
//   { title: "Vue", id: "vue" },
//   { title: "Ember", id: "ember" },
// ];

// Drop down data as simple array
let arrayOptions = ["red", "yellow", "green", "blue"];


const HomePage = () => {
  const navigate = useNavigate();
  const [checkAll, setCheckAll] = useState(false);
  const [unCheck, setunCheck] = useState(false);

  const onChange1 = (value) => {
    console.log(`selected ${value}`);
  };
  //function for the search 
  const onSearch = (value) => {
    console.log("search:", value);
  };
  // condition to select the all options
  const onCheckAllChangeAll = (e) => {
    setCheckAll(true);
    setunCheck(false);
  };
  // condition to Unselect the all options
  const onUnCheckAllChangeAll = (e) => {
    setunCheck("unCheck");
    setCheckAll(false);
  };

  if (typeof arrayOptions[0] === "object") {
    arrayOptions = arrayOptions.map(({ title }) => title);
  }
  return (
    <>
      <div className="HomePage_container">
        <div className="header_content">
          <img src={LogoImg} alt="" />
        </div>
        <div className="HomePage_select">
          <h4
          onClick={() => navigate("/login")} 
          ><ArrowLeftOutlined/> <span>Back </span></h4>
          <h3>Select Your Option</h3>
          <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange1}
            onSearch={onSearch}
            allowSeach
            value={""}
            filterOption={(input, option) => {
              console.log(input, option);
              return option.value.toLowerCase().includes(input.toLowerCase());
            }}
          >
            <Option value="Check all">
              {checkAll ? (
                <Checkbox checked={checkAll} onChange={onUnCheckAllChangeAll}>
                  {" "}
                  UnCheck all
                </Checkbox>
              ) : (
                <Checkbox checked={false} onChange={onCheckAllChangeAll}>
                  Check all
                </Checkbox>
              )}
            </Option>

            {arrayOptions.map((val) => {
              return (
                <Option value={val}>
                  <CheckboxComponent
                    setCheckAll={setCheckAll}
                    checkAll={checkAll}
                    val={val}
                    unCheck={unCheck}
                  />
                </Option>
              );
            })}
          </Select>
          {checkAll && (
            <>
              <Button>Submit</Button>
              <Button onClick={onUnCheckAllChangeAll}>Clear</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;

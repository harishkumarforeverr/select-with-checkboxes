import { Checkbox } from "antd";
import React, { useState, useEffect } from "react";

const CheckboxComponent = ({ val, checkAll, setCheckAll, unCheck }) => {
  const [c, setC] = useState(false);
  const [Bool, setBool] = useState(true);
  const onChange = (list) => {
    if (!list.target.checked) {
      setCheckAll(false);
    }
    setC(list.target.checked);

    console.log("listssssssss", list.target.checked);
  };
  const onChange2 = (list) => {
    if (!list.target.checked) {
      setBool(true);
      setCheckAll(false);
    }
    setC(list.target.checked);

    console.log("listssssssss", list.target.checked);
  };
  useEffect(() => {
    if (unCheck === "unCheck") {
      setC(false);
    }
  }, [unCheck]);
  useEffect(() => {
    if (checkAll) {
      setC(true);
    } else {
      if (Bool) setC((val) => !!val);
    }
  }, [checkAll]);
  return (
    <div>
      {checkAll ? (
        <Checkbox checked={true} onChange={onChange2}>
          {val}
        </Checkbox>
      ) : (
        <Checkbox checked={c} onChange={onChange}>
          {val}
        </Checkbox>
      )}
    </div>
  );
};
export default CheckboxComponent;

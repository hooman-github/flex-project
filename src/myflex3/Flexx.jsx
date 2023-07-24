import React from "react";
import "./flexx.css";

const Flexx = () => {
  return (
    <div>
      <div className="Row1">
        <div className="div11">ستون 1</div>
        <div className="div12">ستون 2</div>
      </div>
      <div className="Row2">
        <div className="div21">ستون یک از سطر دوم</div>
        <div className="div22">
          <div>سطر اول از ردیف دوم ستون دوم</div>
          <div className="div222">سطر دوم از رستون دوم دیف دوم</div>
        </div>
        <div className="div23">ستون سوم از سطر دوم</div>
      </div>
    </div>
  );
};

export default Flexx;

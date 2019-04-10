import React, { Component } from "react";
import request from "es6-request";
import cheerio from "cheerio";
import fs from "fs";

class GetSrcComponent extends Component {
  f_getNumberInFormat(num) {
    var min = 0,
      max = 99;
    if (min <= num && num <= max) {
      if (0 <= num && num <= 9) {
        return "0" + num;
      } else {
        return num;
      }
    }
  }

  f_getSrc() {
    var dataArr = [];
    var dataPath = "data.json";
    request
      .get("https://comic.naver.com/webtoon/weekday.nhn")
      .then(([body, res]) => {
        let $ = cheerio.load(body);
        let lastLen = $(".col")
          .eq(6)
          .find("img").length;
        console.log(lastLen);
        // should output this README file!

        $(".col ").each(async function(day, item) {
          var index = 0;
          $(item)
            .find("img")
            .each(function(num, item) {
              var src = $(item).attr("src");
              if (src.substr(src.length - 3, 3) === "jpg") {
                console.log(day + ", " + index);
                var data = {
                  day: day,
                  num: this.f_getNumberInFormat(index),
                  title: "No Tiltle yet",
                  src: src
                };
                index++;
                dataArr.push(data);
              }
              //console.log(day+' , '+num);
              if (day === 6 && num === lastLen - 1) {
                //this means last, should be modified
                fs.writeFileSync(dataPath, JSON.stringify(dataArr));
                console.log("wrote json file!");
              }
            });
        });
      });
  }
  componentDidMount() {}
  render() {
    return <div className="App">GetSrcComponent</div>;
  }
}

export default GetSrcComponent;

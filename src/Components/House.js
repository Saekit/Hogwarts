import React from "react";

const House = props => {

  let characters = props.chars
  let gryf = characters.filter((char) => char.house === "Gryffindor")
  let huff = characters.filter((char) => char.house === "HufflePuff")
  let rav = characters.filter((char) => char.house === "Ravenclaw")
  let sly = characters.filter((char) => char.house === "Slytherin")

  return (
    <div className={'house-div'}>
    <li name="gryffindor">Gryffindor</li>
    {gryf.map((char) =><img
      key={char.name}
      src={char.image2}
      alt=""
      className={'house-image'}
      onClick={()=>props.clickHandler(char.name)}
      />)}
    <li name="hufflePuff">HufflePuff</li>
    {huff.map((char) =><img
      key={char.name}
      src={char.image2}
      alt=""
      className={'house-image'}
      onClick={()=>props.clickHandler(char.name)}
      />)}
    <li name="ravenclaw">Ravenclaw</li>
    {rav.map((char) =><img
      key={char.name}
      src={char.image2}
      alt=""
      className={'house-image'}
      onClick={()=>props.clickHandler(char.name)}
      />)}
    <li name="slytherin">Slytherin</li>
    {sly.map((char) =><img
      key={char.name}
      src={char.image2}
      alt=""
      className={'house-image'}
      onClick={()=>props.clickHandler(char.name)}
      />)}
    </div>
  );
};

export default House;

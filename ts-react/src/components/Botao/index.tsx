import React from "react";
import style from "./style.module.scss";

class Botao extends React.Component {
  render() {
    return (
      <button className={style.botao}>
        <span>{this.props.children}</span>
      </button>
    );
  }
}

export default Botao;

import { Component } from "react";
import style from "./WordDisplay.module.css";

export default class WordDisplay extends Component {
  state = {
    words: this.props.words,
    option: this.props.action,
    category: "",
    word: "",
  };
  //! W pierwszej kolejności losujemy kategorię słowa
  randomCategory = () => {
    console.log("new category!");
    const myCategory =
      this.state.words[Math.floor(Math.random() * this.state.words.length)];
    this.setState({
      category: myCategory.category,
    });
  };
  //! na podstawie stanu { category } losuje słowo z tablicy
  randomWord = () => {
    const choosenCategory = this.state.category;
    const words = this.state.words.find((w) => w.category === choosenCategory);
    const word = words.value[Math.floor(Math.random() * words.value.length)];
    this.setState({
      word: word,
    });
  };

  render() {
    const { category, word } = this.state;
    //const { status } = this.props;
    return (
      <div className={style.container}>
        <p className={style.main}>{word}</p>
        <p>{category}</p>
      </div>
    );
  }
}

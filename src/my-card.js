import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */



export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      #card-list {
        display: flex;
      }
      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid grey;
        padding: 8px;
        margin: 30px;
        opacity: none;
        background-color: white;
      }


      .card img {
        width: 200px;
        border-radius: 25px;
        padding: 10px;
      }

      .container h1 {
        top: 40px;
        bottom: 50px;
        left: 20px;
        right: 30px;
      }

      .container button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }

      #button1 {
        background-color: pink;
        padding: 8px;
        color: white;
        border-radius: 50px;
      }

      button:active{
        background-color: white;
        color: black;
      }

      @media screen and (max-device-width: 750px){
        .card {
          width: 50%;
          display: table-cell;
        }
        .card img{
          width: 50%;
          display: table-cell;
        }
        .container{
          width: 50%;
        }
        button{
          display: inline;
        }
      }
    `;
  }

  render() {
    return html`
    <div>
      <h1>Card Changing Buttons</h1>
      <p>Select these buttons to change the appearance of the card</p>
      <div>
        <h1>Destiny Card</h1>
      </div>
    </div>
    <div class="control-wrapper">
      <button class="duplicate">Clone Card</button>
      <button id="bg-change">Change background</button>
      <button id="change-title">Change Title</button>
      <button id="change-image">Change Image</button>
      <button id="delete-card">Remove</button>
    </div>
    <div class="card">
      <img src="data:image/png;base64,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">
      <div class="container">
        <h1><b>Destiny</b></h1>
        <button id = "button1">
        <a href="https://www.bungie.net/7/en/destiny">Homepage</a></button>
      </div>
    </div>
  `;
}

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

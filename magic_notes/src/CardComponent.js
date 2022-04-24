// import React, { Component } from "react";

// class CardComponent extends Component {
//   state = {
//     text: "dsdsdfs",
//   };
//   saveHandler = (e) => {
//     e.preventDefault();
//     const { text } = this.state;
//     let obj = {
//       text: text,
//     };
//     this.props.setData();
//     console.log(text);
//   };
//   render() {
//     return (
//       <div className="cardContainer">
//         <form className="card" onSubmit={this.saveHandler}>
//           <div className="topCard">
//             <textarea
//               className="inputText"
//               onChange={(e) => this.setState({ text: e.target.value })}
//             ></textarea>
//           </div>
//           <div className="bottomCard">
//             <p className="number">
//               <span className="number">123 </span> Remaining
//             </p>
//             <button className="btnSave" type="submit">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default CardComponent;

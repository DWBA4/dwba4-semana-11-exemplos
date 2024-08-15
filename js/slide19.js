class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <div>
      <h2>I am a {this.state.color} Car!</h2>
      <br /><br />
      <a href="/">Voltar</a>
    </div>;
  }
}

const domNode = document.getElementById('mydiv');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(<Car />);
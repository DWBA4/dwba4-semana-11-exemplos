class Voltar extends React.Component {
  render() {
    return <div><br /><br /><a href="/">Voltar</a></div>
  }
}

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <h2>Eu tenho um {this.props.model}!</h2>
      <Voltar />
    </div>
  }
}

const domNode = document.getElementById('mydiv');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(<Car model= "Mustang" />);
class Voltar extends React.Component {
  render() {
    return <div><br /><br /><a href="/">Voltar</a></div>
  }
}

class Car extends React.Component {
  render() {
    return <h2>A marca do meu carro é {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    const carname = "Ford";
    return (
      <div>
        <h1>Qual é a marca do seu carro?</h1>
        <Car brand={carname} />
        <Voltar />
      </div>
    );
  }
}



const domNode = document.getElementById('mydiv');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(<Garage />);
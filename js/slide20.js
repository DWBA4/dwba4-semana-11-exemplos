class Voltar extends React.Component {
  render() {
    return <div><br /><br /><a href="/">Voltar</a></div>
  }
}

class Car extends React.Component {
  render() {
    return <h2>Um Mustang!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Qual carro eu possuo na minha garagem?</h1>
        <Car />
        <Voltar />
      </div>
    );
  }
}


const domNode = document.getElementById('mydiv');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(<Garage />);
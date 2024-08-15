class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>
  }
}

const domNode = document.getElementById('mydiv');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(<Hello />);
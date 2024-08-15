const myelement = (
  <div>
    <table border="2">
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
    <br/><br/>
    <a href="/">Voltar</a>
  </div>

);


const domNode = document.getElementById('mydiv');
const mydiv = ReactDOM.createRoot(domNode);
mydiv.render(myelement);
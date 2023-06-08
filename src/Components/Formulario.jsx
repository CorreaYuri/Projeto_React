function Formulario() {
 return(
  <div className="Formulario-container">
    <h1>Saiba mais</h1>
    <label htmlFor="">Nome</label>
    <input type="text" />
    <label htmlFor="">Telefone</label>
    <input type="text" />
    <label htmlFor="">E-mail</label>
    <input type="text" />
    <button className="btn_submit" type="submit">Enviar</button>
  </div> ) 
}

export default Formulario
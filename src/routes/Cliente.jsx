import { useForm } from "react-hook-form";

const Cliente = () => {

  // desestruturando o objeto
  const {register,setValue,setFocus} = useForm();

  // CRIANDO A FUNÇÃO DA API QUE VAI CONSUMIR OS DADOS

  function buscarCep(e){
    const cep= e.target.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>res.json())
    .then((dados)=>{ 
      setValue("rua",dados.logradouro);
      setValue("bairro",dados.bairro);
      setFocus("numero");
    })
  }


  return (
    <div>
      <form>
        <fieldset>
          <legend>Dados Cliente</legend>
          <div>
            <label>Cep:</label>
            <input type="text" 
            {...register("cep")}
            onBlur={buscarCep}
            />
          </div>

          <div>
            <label>Rua:</label>
            <input type="text"
            {...register("rua")}
            />
          </div>

          <div>
            <label>Bairro:</label>
            <input type="text" 
            {...register("bairro")}
            />
          </div>

            <div>
            <label>Número:</label>
            <input type="text" 
            {...register("número")}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Cliente;

import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoreIniciais = {
      nome: '',
      descricao:'',
      cor:''
    }
    const [categorias, setCategorias] = useState(['teste']);
    const [values, setValues] = useState(valoreIniciais);

    
    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor,
      })
    }

    function handleChange(infosDoEvento) {
      const { name, value} = infosDoEvento.target;
      setValue(
        name, 
        value
      );
    }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoreIniciais)
        }}>

         <FormField 
          label='Nome da Categoria: '
          type='text'
          name='nome'
          value={values.nome}
          onChange={handleChange}
         />

         <div>
            <label>
              Descrição:
              <textarea
                type='text'
                value={values.descricao}
                name='descricao'
                onChange={handleChange}
              />
            </label>
          </div>

        <FormField 
          label='Cor: '
          type='color'
          name='cor'
          value={values.cor}
          onChange={handleChange}
         />

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, i) => {
            return (
              <li key={`${categoria}${i}`}>
                {categoria.nome}
              </li>
            ) 
          })}
        </ul>

        <Link to='/'>
          Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;
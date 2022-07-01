import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

const Home = () => {



  // 1- Configurar hooks
    const [usuarios, setUsusarios] = useState([])
    //2 Funcion para mostrar los datos con fetch
    //const URL = 'https://gorest.co.in/public/v2/users';
    const URL = 'https://62a0decda9866630f819f19b.mockapi.io/api/v1/users';
    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
       // console.log(data);
        setUsusarios(data)
    }
    useEffect( () => {
        showData();
    },[])
    //3-Configuramos las columnas para DataTable
    const columns= [
       /* {
          name : 'ID',
          selector: row=> row.id
      },*/
      {
          name : 'NOMBRE',
          selector: row => row.name,
          sortable: true, //permite que se pueda ordenar por este columna

      },
      {
          name : 'E-MAIL',
          selector: row=> row.email
      },
      {
          name : 'SEXO',
          selector: row=> row.sex,
          sortable: true,

      },
      {
          name : 'ESTADO',
        selector: row => row.status,
        sortable: true,

      },
        {
          name : 'Tel',
          selector: row=> row.phone
          },
    ];
    //configurar Theme
    createTheme('custom', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');


    //4-Mostrar Data en DataTable
    const paginationComponentOptions = {
          rowsPerPageText: 'Filas por página',
          rangeSeparatorText: 'de',
          selectAllRowsItem: true,
          selectAllRowsItemText: 'Todos',
    };

   return (
      <div>
         <h1>PRINCIPAL</h1>
             <h1>Table de Clientes x Fectch</h1>
        <DataTable
          title="Clientes"
          fixedHeader //permite fijar los titulos
          fixedHeaderScrollHeight="300px"
          theme='custom'
          columns={columns}
          data={usuarios}
          selectableRows //pone los cheks
          selectableRowsHighlight
          pagination paginationComponentOptions={paginationComponentOptions}
          responsive
          //pointerOnHover
          striped
          onColumnOrderChange={cols => console.log(cols)}
        />
      </div>
   )
}

export default Home
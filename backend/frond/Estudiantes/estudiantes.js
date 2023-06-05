import { getEstudaintes } from "./Api.js";
addEventListener('DOMContentLoaded', cargarEstudiantes);
const tableEstudiantes = document.querySelector("#tabla");
async function cargarEstudiantes() {

    const Estudiantes = await getEstudaintes();
    /* console.log(Estudiantes */
    Estudiantes.forEach(element => {
      tableEstudiantes.innerHTML +=`
      <tr class="cards" 
      
      imagen="${element.imagen}"
      nombre="${element.nombre}" 
      edad="${element.edad}"
      promedio="${element.promedio}"
      nivelCAmpus="${element.nivelCAmpus}"
      nivelIngles="${element.nivelIngles}"
      especialidad="${element.especialidad}" 
      direccion="${element.direccion}"
      celular="${element.celular}"
      ingles="${element.ingles}"
      Ser="${element.Ser}"
      Review="${element.Review}"
      Skills="${element.Skills}"
      Asitencia="${element.Asitencia}"
      
      >
      <th id="${element.id}" scope="row">${element.id}</th>
      <td id="${element.id}">${element.nombre}</td>
      <td id="${element.id}">${element.especialidad}</td>
      <td id="${element.id}"><img src="images/${element.imagen}" alt=""></td>
      <td id="${element.id}"><button type="button" class="btn btn-info">Notas</button> </td>
      
      </tr>
      `
    })
    
    function detalle(){
        tableEstudiantes.addEventListener("click", (e)=>{
            console.log(e.target);

        if (e.target.getAttribute("id")){
            const atributos = e.target.getAttribute("id");
            const elemeto = document.getElementById(atributos);
            const Padre = elemeto.parentNode;
            console.log(Padre);

            const imagen = Padre.getAttribute("imagen");
            const nombre = Padre.getAttribute("nombre");
            const edad = Padre.getAttribute("edad");
            const promedio = Padre.getAttribute("promedio");
            const nivelCAmpus = Padre.getAttribute("nivelCAmpus");
            const nivelIngles = Padre.getAttribute("nivelIngles");
            const especialidad = Padre.getAttribute("especialidad");
            const direccion = Padre.getAttribute("direccion");
            const celular = Padre.getAttribute("celular");

            const ingles = Padre.getAttribute("ingles");
            const Ser = Padre.getAttribute("Ser");
            const Review = Padre.getAttribute("Review");
            const Skills = Padre.getAttribute("Skills");
            const Asitencia = Padre.getAttribute("Asitencia");

            const detalles = document.querySelector("#detalles");
            detalles.innerHTML = /*html*/`
            <div class="containerDetalles">
            
                <div class="datos">
                    <div class="d-flex">
                    <img src="images/${imagen}" alt="" class="m-2"/>
                    <button type="button" class="btn btn-danger delete" style="height:40px;">Eliminar</button>
                    </div>
                    <h5>${nombre}</h5>
                    <h5>edad:${edad}</h5>
                    <h5>promedio:${promedio}</h5>
                    <h5>nivelCAmpus:${nivelCAmpus}</h5>
                    <h5>nivelIngles:${nivelIngles}</h5>
                    <h5>especialidad:${especialidad}</h5>
                    <h5>direccion:${direccion}</h5>
                    <h5>celular:${celular}</h5>
                </div>
            </div>
            <div id="charts1" class="charts"></div>
            `;


            const getOpcionesEcharts1= ()=> {
              let valueIngles= (ingles*1);
              let valueSer = (Ser*1);
              let valueReview = (Review*1);
              let valueSkills = (Skills*1);
              let valueAsitencia = (Asitencia*1);
                return {
                    tooltip: {
                      trigger: 'item'
                    },
                    legend: {
                      top: '5%',
                      left: 'center',
                      // doesn't perfectly work with our tricks, disable it
                      selectedMode: false
                    },
                    series: [
                      {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                          show: true,
                          formatter(param) {
                            // correct the percentage
                            return param.name + ' (' + param.percent * 2 + '%)';
                          }
                        },
                        data: [
                          { value: valueIngles, name: 'Ingles' },
                          { value: valueSer, name: 'Ser' },
                          { value: valueReview, name: 'Review' },
                          { value: valueSkills, name: 'Skills' },
                          { value: valueAsitencia, name: 'Asistencia'},
                          {
                            // make an record to fill the bottom 50%
                            value: valueIngles + valueSer + valueReview + valueSkills + valueAsitencia,
                            itemStyle: {
                              // stop the chart from rendering this piece
                              color: 'none',
                              decal: {
                                symbol: 'none'
                              }
                            },
                            label: {
                              show: false
                            }
                          }
                        ]
                      }
                    ]
                  };
            }
            const charts1 = echarts.init(document.getElementById('charts1'));
            charts1.setOption(getOpcionesEcharts1());
        }

    })
    }

    detalle();
}
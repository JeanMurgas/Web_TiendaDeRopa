const ctx = document.getElementById ("myChart")
const categorias = ["Sueter","Abrigo","Pantalón","Gorras"]
const busquedas = [20, 10, 15,40]

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categorias,
        datasets: [{
            label: 'edad',
            data: busquedas,
            backgoundColor:[
                'rgba(255,99,132, 0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(75,192,192,0.2)',
                'rgba(153,102,255, 0.2)',
                'rgba(255,159,64,0.2)'
            ],
            borderColor: [
                'rgba(255,99,132, 0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(75,192,192,0.2)',
                'rgba(153,102,255, 0.2)',
                'rgba(255,159,64,0.2)'
            ],
            borderWith: 1.5
        }]
    }
});
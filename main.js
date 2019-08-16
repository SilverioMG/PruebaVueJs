const localStorageValuesName = 'values';

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola',
        val: 0,
        values:[],
        buttonValue: 'Dale!',
        greenClass: 'color: green',
        redClass: 'color: red'
    },
    methods: {
        guardar: function(){
            if((this.message != undefined) && (this.val != undefined)){
                this.values.push({message: this.message, val: this.val});
                this.saveLocalStorage();
            }
            else{
                alert("Ingrese valores");
            }
        },
        clearInputs: function(){
            this.message = "";
            this.val = 0;
        },
        eliminar: function(index){
            this.values.splice(index, 1);
            this.saveLocalStorage();
        },
        saveLocalStorage: function(){
            //Se guarda el array 'values' en el 'LocalStorage' de esta App (en el navegador).
            localStorage.setItem(localStorageValuesName, JSON.stringify(this.values));
        },
        destroy: function(){
            //Este método destruye la instacia de Vue, la UI sigue intacta pero ya no se hace binding contra ella ni se ejecutan métodos de este objeto 'Vue'.
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        //Este método se ejecuta cuando se crea este Objeto 'Vue' (métodos, observadores y eventos pero aún no se accede al DOM ó 'el').
        console.log("created");
        let datosLocalStorage = JSON.parse(localStorage.getItem(localStorageValuesName));
        if(datosLocalStorage != null){
            this.values = datosLocalStorage;
        }
    },
    beforeMount(){
        //Se ejecuta antes de insertar el DOM.
        console.log("beforeMount");
    },
    mounted(){
        //Se ejecuta al insertar el DOM.
        console.log("mounted");
    },
    beforeUpdate(){
        //Se ejecuta cuando se detecta un cambio, antes de realizarlo.
        console.log("beforeUpdate");
    },
    updated(){
        //Se ejecuta al realizar los cambios.
        console.log("update");
    },
    beforeDestroy(){
        //Se ejecuta antes de destruir el objeto 'Vue'.
        console.log("beforeDestroy");
    },
    destroyed(){
        //Se ejecuta cuando se destruye la instacia.
        console.log("destroyed");
    },
    computed: {
        total: function(){
            //Se ejecuta este método cada vez que se cambia el valor de las variables de 'data' que utiliza (en este caso 'values').
            //Otra manera sería declarar una variable 'total' en 'data' y actualizar su valor en el método 'guardar()' cada vez que se inserta un nuevo elemento en la lista.
            let total = 0;
            for(value of this.values){
                if(value.val != undefined){
                    total += value.val;
                }
            }

            return total;
        }
    }
})
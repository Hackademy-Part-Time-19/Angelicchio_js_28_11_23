let persona = {
    nome: "Mario",
    cognome: "Rossi",
    età: 32,

    saluta: function(){
        console.log("ciao sono "+this.nome+" "+this.cognome+" e ho "+this.età+" anni");
    }
};

persona.saluta();
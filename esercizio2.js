let agenda = {
    contatto : [],

    stampaAgenda: function(){
        console.log(this.contatto);
    },

    stampaSingolo: function(indice){
        console.log(this.contatto[indice]);
    },

    eliminaContatto: function(indice){
        this.contatto.splice(indice, 1);
    },

    aggiungiContatto: function(nome, numeroTelefono){
        var nuovoContatto={
            nome: nome,
            numeroTelefono: numeroTelefono
        };
        this.contatto.push(nuovoContatto);
    },

    modificaContatto: function(indice){
        
    }
}

let operazione = 1;

while(operazione>0){
    operazione = parseInt(prompt("1:Leggi agenda\n2:Leggi contatto\n3:Elimina contatto\n4:Aggiungi contatto\n5:Modifica contatto\n0:Esci"));
    if(operazione=1){
        agenda.stampaAgenda();
    }
    else if(operazione=2){
        let indice = parseInt(prompt("Inserisci indice contatto"));
        agenda.stampaSingolo(indice);
    }
    else if(operazione=3){
        let indice = parseInt(prompt("Inserisci indice contatto da eliminare"));
        agenda.eliminaContatto(indice);
    }
    else if(operazione=4){
        let nome = prompt("Inserisci nome");
        let numeroTelefono = parseInt(prompt("Inserisci numero"));
        agenda.aggiungiContatto(nome, numeroTelefono);
    }
    else if(operazione=5){
        let indice = parseInt(prompt("Inserisci indice contatto da modificare"));
        agenda.modificaContatto(indice);
    }
}
class Veicolo {
  constructor(marca, anno, colore) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
  }

  informazioni() {
    return `Marca: ${this.marca}, Anno: ${this.anno}, Colore: ${this.colore}`;
  }

  calcolaEta() {
    const annoCorrente = new Date().getFullYear();
    return annoCorrente - this.anno;
  }
}

const miaVettura = new Veicolo("Fiat", 2019, "Blu");

console.log(miaVettura.informazioni());

console.log(`Età del veicolo: ${miaVettura.calcolaEta()} anni`);

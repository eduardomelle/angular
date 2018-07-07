import { Component } from "@angular/core";
import { UserModel } from "./model/user-model";
import { Address } from "./model/address";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  nomeValue;
  idadeValue;
  ruaValue;
  numeroValue;
  cidadeValue;
  animalName;

  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel("", 0, new Address("", 0, ""));
  }

  showAlert() {
    alert("Fui clicado");
  }

  setRandomNumber() {
    const rand = Math.random();
    // this.numeroValue = rand;
    this.userModel.age = rand;
  }

  updateAnimal(animalName: string) {
    this.animalName = animalName;
  }

  atualizar(
    nome: string,
    idade: number,
    rua: string,
    numero: number,
    cidade: string
  ) {
    /*this.nomeValue = nome;
    this.idadeValue = idade;
    this.ruaValue = rua;
    this.numeroValue = numero;
    this.cidadeValue = cidade;*/

    let address: Address = new Address(rua, numero, cidade);

    this.userModel = new UserModel(nome, idade, address);
  }

  adicionarEndereco(rua: string, numero: number, cidade: string) {
    this.userModel.address.push(new Address(rua, numero, cidade));
  }

  remover() {
    this.userModel.address;
  }
}

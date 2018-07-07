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
  address = new Address("", 0, "");

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

  atualizar() {
    /*this.nomeValue = nome;
    this.idadeValue = idade;
    this.ruaValue = rua;
    this.numeroValue = numero;
    this.cidadeValue = cidade;*/
    // let address: Address = new Address(rua, numero, cidade);
    // this.userModel = new UserModel(nome, idade, null);
  }

  adicionarEndereco() {
    this.userModel.address.push(this.address);
    this.address = new Address("", 0, "");
  }
}

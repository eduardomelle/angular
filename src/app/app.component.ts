import { Component } from "@angular/core";
import { UserModel } from "./model/user-model";
import { Address } from "./model/address";
import { UserService } from "./services/user.service";
import { Teste } from "./teste";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService, Teste]
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

  // userService: UserModel;

  constructor(private _userService: UserService, private _teste: Teste) {
    // this.userModel = new UserModel("", 0, new Address("", 0, ""));
    this.userModel = new UserModel();
  }

  showAlert() {
    alert("Fui clicado");

    // this._userService

    alert(this._teste.nome);
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

    // let user: UserModel = new UserModel();
    this.userModel = new UserModel();
    this.userModel.name = "Eduardo Orlandi Melle";
    this.userModel.age = 39;

    this._userService
      .createUser(this.userModel)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });
  }

  obterUsuario() {
    /*this._userService
      .getUser()
      .then(user => {
        console.log(user);
        alert(user);
      })
      .catch(e => {
        console.log(e);
      });*/

    this._userService
      .addAddress(this.address)
      .then(user => {
        console.log(user);
        for (var i = 0; i < user.address.length; i++) {
          alert(user.address[i].street);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
}

import { Injectable } from "@angular/core";
import { UserModel } from "../model/user-model";
import { Address } from "../model/address";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private USER_STORAGE_NAME = "user";

  constructor() {}

  createUser(user: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      if (user) {
        localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(user));
        resolve(user);
      } else {
        reject(new Error("Dados de usuário não informados"));
      }
    });
  }

  getUser(): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      const user = localStorage.getItem(this.USER_STORAGE_NAME);
      if (user) {
        try {
          resolve(JSON.parse(user));
        } catch (error) {
          reject(error);
        }
      } else {
        resolve(null);
      }
    });
  }

  addAddress(address: Address): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      const userJson: string = localStorage.getItem(this.USER_STORAGE_NAME);
      let user: UserModel = JSON.parse(userJson);
      console.log(address);
      user.address.push(address);
      try {
        localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(user));
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { UserInfoRequest } from '../constants/ddo.constants';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _appToken: string;
  private _clientRequest: UserInfoRequest;
  private _integratedEv: string;
  private _isMaker: boolean;
  private _isChecker: boolean;

  constructor() {
  this._clientRequest = {
    'memberKey': '',
    'relnKey': '',
    'userType': 'E',
    'cwrkId': '',
    'reportCurrency': '',
    'soeId': '',
    'fullName': '',
    'userRole': '',
    'maker': '',
    'checker': ''
  };
  this.userRequest = { ...this._clientRequest };
}
  // Token
  set appToken(_token) { this._appToken = _token; }
  get appToken() {return this._appToken; }

  // User Request
  set userRequest(_userReq) { this._clientRequest = _userReq; }
  get userRequest() { return this._clientRequest; }

  set integratedEnv(_env) { this._integratedEv = _env; }
  get integratedEnv() { return this._integratedEv; }

  // Is Maker Check
  set isMaker(_isMkr) { this._isMaker = _isMkr; }
  get isMaker() { return this._isMaker; }

  // Is Checker Check
  set isChecker(_isChkr) { this._isChecker = _isChkr; }
  get isChecker() { return this._isChecker; }
}

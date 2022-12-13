import { environment } from 'src/environments/environment';
import { DeserealizerInterface } from './deserializer.model';


export class UserInterface implements DeserealizerInterface {
  authenticated: boolean = true;
  id: string = 'Descrição';
  userName: string = 'Nome usuário';
  type: string = '';
  token: string = '';

  deserializer(input: any): any {
    Object.assign(this, input);
    return this;
  }
}

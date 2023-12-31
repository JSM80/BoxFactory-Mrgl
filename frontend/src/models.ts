export class Box {
  boxId?: number;
  boxName?: string;
  description?: string;
  length?: number;
  width?: number;
  height?: number;
  price?: number;
  amount?: number;
}

export class ResponseDto<T> {
  responseData?: T;
  messageToClient?: string
}

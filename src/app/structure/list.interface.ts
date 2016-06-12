export interface List {
  data: Map<any, any>|Set<any>;
  size: number;
  identifier(): number;
  get(key: any): any;
  set(key: any, value: any);
  has(key: any): boolean;
  has(key: any): boolean;
  getFirst(): any;
  delete(key: any): boolean;
}

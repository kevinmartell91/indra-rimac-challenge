export class BuildBodyJson {
  public static bodyToString = (object: object): string => {
    return JSON.stringify(object);
  };
}

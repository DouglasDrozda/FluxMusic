export interface INews {
  id: number,
  title: string,
  subtitle: string,
  img: string | undefined,
  alt: string,
  content: string,
  writer: string,
  url: string,
}

export interface IHandleCHange {
  target: {
    value: string;
  };
}

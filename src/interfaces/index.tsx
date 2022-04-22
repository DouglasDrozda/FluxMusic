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

export interface IArtist {
  id: number,
  name: string,
  img: string | undefined,
  alt: string,
  url: string,
  description: string,
  nascimento: string,
  falecimento: string,
}

export interface IDiscs {
  id: number,
  title: string,
  release_date: string,
  img: string | undefined,
  alt: string,
  description: string,
  link: string,
}

export interface IHandleCHange {
  target: {
    value: string;
  };
}

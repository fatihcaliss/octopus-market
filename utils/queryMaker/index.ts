interface IFilterParams {
  q?: string;
  pagination: {
    limit: number;
    skip: number;
  };
}

const queryMaker = (params: IFilterParams): string => {
  if (params.q) {
    return `/search?q=${params.q}`;
  } else {
    return `?limit=${params.pagination.limit}&skip=${params.pagination.skip}`;
  }
};

export default queryMaker;

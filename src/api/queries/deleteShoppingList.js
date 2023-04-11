import { axios } from './init';

export const deleteShoppingList = async key => {
  console.log('key', key);
  const { data } = await axios.delete(`/shopping-list`, { data: key });
  return data.data;
};

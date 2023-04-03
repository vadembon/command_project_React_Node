import { AuthTest } from './AuthTest';
import { UserTest } from './UserTest';
import { CatIngredTest } from './CatIngredTest';
import { List, Item, Title } from './ApiTest.styled';

export const ApiTest = () => {
  return (
    <List>
      <Item>
        <Title>Auth</Title>
        <AuthTest />
      </Item>
      <Item>
        <Title>User</Title>
        <UserTest />
      </Item>
      <Item>
        <Title>Categories & Ingredients</Title>
        <CatIngredTest />
      </Item>
    </List>
  );
};

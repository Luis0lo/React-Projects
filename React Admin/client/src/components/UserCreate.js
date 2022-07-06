import { Create, SimpleForm, TextInput } from 'react-admin';

const UserCreate = (props) => {
  return (
    <Create title="Add new User" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;

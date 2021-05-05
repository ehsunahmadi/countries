import { SearchIcon } from "@chakra-ui/icons";
import { Form } from "react-final-form";
import { InputControl } from "../../components/FormElements";
import AutoSave from "../../utils/AutoSave";

const SearchCountry = ({ save }) => {
  return (
    <Form
      onSubmit={(values) => {
        return !values.name
          ? save({ name: undefined })
          : save(values); /* NOT USED, but required */
      }}
    >
      {({ form }) => (
        <>
          <AutoSave debounce={1000} save={save} debounced={["name"]} />
          <InputControl
            onChange={form.submit}
            w={475}
            name="name"
            placeholder="search for a country..."
            leftIcon={<SearchIcon color="gray.300" />}
          />
        </>
      )}
    </Form>
  );
};

export default SearchCountry;

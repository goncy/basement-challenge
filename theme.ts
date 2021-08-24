import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
  components: {
    Button: {
      variants: {
        outline: {
          borderRadius: 9999,
          borderWidth: 2,
        },
        link: {
          color: "white",
        },
      },
    },
  },
});

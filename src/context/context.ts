import { createContext } from "react";

export const SearchWordContext = createContext(undefined)

// export function useSearchContext() {
//   const searchWord = useContext(SearchWordContext);

//   if (searchWord === undefined) {
//     throw new Error ('usecontext must be inside the provider.')
//   }

//   return searchWord;
// }
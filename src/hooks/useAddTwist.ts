import { useContext } from "react"
import { TwistContext } from "../contexts/LandingPageProvider"


export const useAddTwist = () => {
  return useContext(TwistContext)
}
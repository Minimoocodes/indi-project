import { Stack } from "@chakra-ui/react";
import profile from "../assets/Profile.png";

const Profile = () => {
  return (
    <Stack align="center" spacing={5}>
      <img src={profile} />
      <h2 className="r-semibold text-lg md:text-xl">Joline</h2>
      <p className="r-regular text-md md:text-lg">
        Hi! I'm Joline and love to cook. welcome to my food journal
      </p>
    </Stack>
  );
};

export default Profile;

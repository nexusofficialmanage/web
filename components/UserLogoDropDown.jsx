import { useUser } from '@auth0/nextjs-auth0/client';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import './UserLogoDropDown.css'

export default function UserLogoDropDown() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const handleLogout = () => { 
    router.push("/api/auth/logout");
  }

  const handleTestClick = () => {
    console.log("hello");
    router.push("/jf")
  }

  const items = [
    {
      key: "Profile",
      label: "View Profile",
      onClick: "",
    },
    {
      key: "copy",
      label: "Copy link",
      onClick: "",
    },
    {
      key: "edit",
      label: "Edit file",
      onClick: handleTestClick,
    },
    {
      key: "SignOut",
      label: "Sign Out",
      onClick: handleLogout,
    }
  ];

  return (
    <Dropdown className='dropdown'>
      <DropdownTrigger>
        <img src={user ? user.picture : '/assests/images/userlogopic.png'} alt='user-img' className='userlogo' />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        {items.map((item) => (
          <DropdownItem key={item.key} onClick={item.onClick} className='dropdownitem'>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
